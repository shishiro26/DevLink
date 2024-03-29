import React from "react";
import { Metadata } from "next";
import { currentUser } from "@/lib/auth";

export const generateMetadata = async (): Promise<Metadata> => {
  const user = await currentUser();
  return {
    title: `${user?.name}`,
  };
};

const page = () => {
  return <div>page</div>;
};

export default page;
