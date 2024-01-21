import LoginForm from "@/components/shared/auth/Login-form";
import React from "react";
import BasicInfoForm from "../_components/basic-info-form";
import { Metadata } from "next";

export const generateMetadata = () => {
  return {
    title: "Profile | DevLink",
    description: "HELLO WORLD",
  };
};

const page = () => {
  return (
    <div>
      <BasicInfoForm />
    </div>
  );
};

export default page;
