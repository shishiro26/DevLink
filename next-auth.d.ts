import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  firstName: string;
  lastName: string;
  bio: string;
  isOAuth: boolean;
  skills: string[];
  links: string[];
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
