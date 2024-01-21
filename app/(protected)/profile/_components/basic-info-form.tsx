"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCurrentUser } from "@/hooks/use-current-user";
import { InfoSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/shared/form-error";
import { useSession } from "next-auth/react";
import { updateProfile } from "@/actions/profile";
import { FormSuccess } from "@/components/shared/form-success";

const BasicInfoForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<String | undefined>();
  const { update } = useSession();

  const user = useCurrentUser();

  const form = useForm<z.infer<typeof InfoSchema>>({
    resolver: zodResolver(InfoSchema),
    defaultValues: {
      firstName: user?.firstName || undefined,
      lastName: user?.lastName || undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      links: undefined,
      skills: undefined,
      bio: user?.bio || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof InfoSchema>) => {
    startTransition(() => {
      updateProfile(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch((err) => {
          console.log(err);
          setError("Something went wrong!");
        });
    });
    console.log(values);
  };
  return (
    <Card className="m-2">
      <CardHeader>
        <p className="text-2xl font-semibold text-center  text-[#FF5954]">
          Basic Information
        </p>
      </CardHeader>
      <div className="flex">
        <CardContent className="w-[45vw]">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#83A2FF]">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className=" text-[#4e54c8]"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#83A2FF]">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className=" text-[#4e54c8]"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#83A2FF]">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className=" text-[#4e54c8]"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#83A2FF]">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="johdoe@example.com"
                          disabled={user?.isOAuth}
                          className=" text-[#4e54c8]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardContent className="w-[45vw]">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#83A2FF]">Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="John Doe "
                          className="resize-none  text-[#4e54c8]"
                          rows={6}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {!user?.isOAuth && (
                  <>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#83A2FF]">
                            Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="*******"
                              className=" text-[#4e54c8]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#83A2FF]">
                            New Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="******"
                              className=" text-[#4e54c8]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />

              <Button
                type="submit"
                className="bg-[#83A2FF] hover:bg-[#7D80DA]"
                disabled={isPending}
              >
                Save
              </Button>
            </form>
          </Form>
        </CardContent>
      </div>
    </Card>
  );
};

export default BasicInfoForm;
