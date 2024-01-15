import LoginForm from "@/components/shared/auth/Login-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const page = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;
