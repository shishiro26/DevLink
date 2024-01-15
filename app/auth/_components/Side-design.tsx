"use client";
import React from "react";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Public from "@/public/assets/icons/Public.svg";
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500"] });
import { usePathname, useSearchParams } from "next/navigation";

const SideDesign = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") || "Something went wrong";
  return (
    <>
      {pathname === "/auth/login" ? (
        <>
          <div className={"flex flex-col justify-center"}>
            <div
              className={
                "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl flex flex-col justify-center"
              }
            >
              <h1 className={`${jetBrains.className} text-[#0AD3FF]`}>
                print(
                <span className={"text-[#FF5964]"}>'Hello, DevLink!'</span>)
              </h1>
            </div>
            <p className={"mb-6 text-lg font-normal text-[#D4DCFF] lg:text-lg"}>
              Secure your coding journey! Log in to DEVLINK, connect with
              developers, and explore collaborative coding adventures. Showcase
              your projects, participate in hackathons, and level up your coding
              skills with our vibrant community.
            </p>
          </div>
        </>
      ) : pathname === "/auth/register" ? (
        <>
          <div className={"flex flex-col justify-center gap-y-4 items-center"}>
            <div className="flex flex-col justify-center gap-y-4">
              <div
                className={
                  "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl flex flex-col justify-center"
                }
              >
                <h1 className={`${jetBrains.className} text-[#0AD3FF]`}>
                  signup(
                  <span className={"text-[#FF5964]"}>
                    'Welcome to DevLink!'
                  </span>
                  )
                </h1>
              </div>
              <p
                className={"mb-6 text-lg font-normal text-[#D4DCFF] lg:text-lg"}
              >
                Join DEVLINK today and embark on a coding adventure! Create an
                account, connect with developers, and showcase your projects.
                Participate in hackathons and collaborate with our vibrant
                community to enhance your coding skills.
              </p>
            </div>
          </div>
        </>
      ) : pathname === "/auth/error" ? (
        <>
          <div className={"flex flex-col justify-center gap-y-4 items-center"}>
            <div className="flex flex-col justify-center gap-y-4">
              <div
                className={
                  "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl flex flex-col justify-center"
                }
              >
                <h1 className={`${jetBrains.className} text-[#0AD3FF]`}>
                  console.error(
                  <span className={"text-[#FF5964]"}>{urlError}</span>)
                </h1>
              </div>
              <p
                className={"mb-6 text-lg font-normal text-[#D4DCFF] lg:text-lg"}
              >
                There was an error during the OAuth authentication process.
                Please check your credentials, try again, and ensure that you
                have the necessary permissions. If the issue persists, contact
                support for assistance.
              </p>
            </div>
          </div>
        </>
      ) : pathname === "/auth/new-verification" ? (
        <>
          <div className={"flex flex-col justify-center gap-y-4 items-center"}>
            <div className="flex flex-col justify-center gap-y-4">
              <div
                className={
                  "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl flex flex-col justify-center"
                }
              >
                <h1 className={`${jetBrains.className} text-[#0AD3FF]`}>
                  verifyEmail(
                  <span className={"text-[#FF5964]"}>'Verifying Email'</span>)
                </h1>
              </div>
              <p
                className={"mb-6 text-lg font-normal text-[#D4DCFF] lg:text-lg"}
              >
                Thank you for signing up with DEVLINK! To complete your
                registration, please click on the verification link sent to your
                email address. If you haven't received the email, please check
                your spam folder.
              </p>
            </div>
          </div>
        </>
      ) : pathname === "/auth/reset" ? (
        <>
          <div className={"flex flex-col justify-center gap-y-4 items-center"}>
            <div className="flex flex-col justify-center gap-y-4">
              <div
                className={
                  "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl flex flex-col justify-center"
                }
              >
                <h1 className={`${jetBrains.className} text-[#0AD3FF]`}>
                  resetPassword(
                  <span className={"text-[#FF5964]"}>
                    'Reset Your Password'
                  </span>
                  )
                </h1>
              </div>
              <p
                className={"mb-6 text-lg font-normal text-[#D4DCFF] lg:text-lg"}
              >
                Forgot your password? No worries! Enter your email address
                below, and we'll send you a link to reset your password.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={"flex flex-col justify-center gap-y-4 items-center"}>
            <div className="flex flex-col justify-center gap-y-4">
              <div
                className={
                  "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl flex flex-col justify-center"
                }
              >
                <h1 className={`${jetBrains.className} text-[#0AD3FF]`}>
                  resetPassword(
                  <span className={"text-[#FF5964]"}>
                    'Create a New Password'
                  </span>
                  )
                </h1>
              </div>
              <p
                className={"mb-6 text-lg font-normal text-[#D4DCFF] lg:text-lg"}
              >
                Set a new password for your DEVLINK account. Enter your new
                password below to regain access to your account.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SideDesign;
