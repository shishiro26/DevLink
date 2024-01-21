"use client";
import React from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skillIcons, socialIcons } from "@/constants/icons";
import { useCurrentUser } from "@/hooks/use-current-user";

const Profile = () => {
  const user = useCurrentUser();
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Image
                  src={`${user?.image}`}
                  alt={`${user?.name}`}
                  width={32}
                  height={32}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                />

                <h1 className="text-xl font-bold text-black">{user?.name}</h1>
                <p className="text-sm text-gray-400 select-none">
                  {user?.firstName} {user?.lastName}
                </p>
                <Link
                  href={`/profile/about`}
                  className="h-6 w-6 m-2 flex items-center justify-center rounded-lg hover:bg-[#7D80DA] tooltip__div"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Pencil className="text-[#7D80DA] h-4 w-4 cursor-pointer hover:text-white tooltip__p" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <div className="flex flex-col text-black">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul className=" h-80 overflow-y-scroll">
                  {user?.skills.map((skill: any) => {
                    const icon = skillIcons(skill);
                    return (
                      <li className="mb-2" key={skill}>
                        <p className="flex items-center">
                          {icon && <icon.icon fill={`${icon?.color}`} />}
                          {skill}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-black">About Me</h2>
              <p className="text-gray-700">{user?.bio}</p>

              <h3 className="font-semibold text-center mt-3 -mb-2 text-black">
                My Links
              </h3>
              <div className="flex justify-center items-center gap-6 my-6">
                <ul className="flex  flex-row gap-2">
                  {user?.links.map((link: any) => {
                    const icon = socialIcons(link);
                    console.table(icon);
                    return (
                      <li className="mb-2 text-black" key={link}>
                        <Link href={link}>
                          {icon && (
                            <icon.icon
                              fill={`${icon?.color}`}
                              className="h-7 w-7"
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
              <div className="mb-6 text-black">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2 text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2 text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
