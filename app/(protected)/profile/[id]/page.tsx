import React from "react";
import { Metadata } from "next";
import { currentUser } from "@/lib/auth";
import Profile from "../_components/proflle";

export const generateMetadata = async (): Promise<Metadata> => {
  const user = await currentUser();
  return {
    title: `${user?.name}`,
  };
};

const page = () => {
  return <Profile />;
};
export default page;
