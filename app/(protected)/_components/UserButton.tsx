"use client";
import { LogoutButton } from "@/components/shared/log-out-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogOut, User } from "lucide-react";
import React from "react";
import Link from "next/link";

const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-[#7D80DA]">
            <User className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 cursor-pointer" align="end">
        <DropdownMenuItem>
          <div className="cursor-pointer flex">
            <User className="h-4 w-4 mr-2 cursor-pointer" />
            <Link href="/profile">Profile</Link>
          </div>
        </DropdownMenuItem>
        <LogoutButton>
          <DropdownMenuItem>
            <div className="cursor-pointer flex">
              <LogOut className="h-4 w-4 mr-2 cursor-pointer" />
              Logout
            </div>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
