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

const SocialForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<String | undefined>();
  const { update } = useSession();

  const user = useCurrentUser();

  const form = useForm<z.infer<typeof InfoSchema>>({
    resolver: zodResolver(InfoSchema),
    defaultValues: {
      links: undefined,
      skills: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof InfoSchema>) => {
    console.log(values);
  };
  return (
    <Card className="ml-24 my-2 mr-5  sm:ml-24 2xl:ml-36 2xl:my-5  w-[70%] overflow-hidden sm:w-[82vw] md:w-[90vw]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center  text-[#FF5954]">
          Your skillset
        </p>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <CardContent className="w-full">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="links"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#83A2FF]">
                        Online Profiles
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder=""
                          disabled={user?.isOAuth}
                          className=" text-[#4e54c8]"
                        />
                      </FormControl>
                      <div>
                        {user?.links.map((link) => {
                          return <div>{link}</div>;
                        })}
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardContent className="w-full">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#83A2FF]">
                        Your skills
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder=""
                          className="resize-none  text-[#4e54c8]"
                          disabled={isPending}
                        />
                      </FormControl>
                      <div>
                        {user?.skills.map((link) => {
                          return <div>{link}</div>;
                        })}
                      </div>
                    </FormItem>
                  )}
                />
              </div>
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

export default SocialForm;
