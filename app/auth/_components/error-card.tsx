import { BackButton } from "@/components/shared/auth/Back-button";
import Header from "@/components/shared/auth/Header";
import {
  Card,
  CardHeader,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import error from "@/public/assets/images/error.png";

const ErrorCard = () => {
  return (
    <Card className="shadow-md  text-[#4e54c8] w-full lg:max-w-lg lg:p-0 sm:p-8 bg-white rounded-lg">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardDescription className="flex justify-center">
        <Image src={error} alt="error" height={250} width={250} />
      </CardDescription>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
