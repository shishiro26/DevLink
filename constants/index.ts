import { Home, Code, Compass, Grip } from "lucide-react";
import {
  FaCss3,
  FaDribbble,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaTwitter,
  FaGitlab,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiFramer, SiMongodb, SiPrisma } from "react-icons/si";
import { TbBrandDeno, TbBrandNextjs } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { BsTwitterX } from "react-icons/bs";

export const navItems = [
  {
    path: "/",
    name: "Home",
    icon: Home,
  },
  {
    path: "/discover",
    name: "Discover",
    icon: Compass,
  },
  {
    path: "/get-started",
    name: "Get Started",
    icon: Grip,
  },
  {
    path: "/develop",
    name: "Develop",
    icon: Code,
  },
];

export const icons = [
  {
    name: "html",
    icon: FaHtml5,
    color: "#FF5954",
  },
  {
    name: "css",
    icon: FaCss3,
    color: "#1572B6",
  },
  {
    name: "javascript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    name: "js",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    name: "react",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "reactjs",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "nodejs",
    icon: FaNodeJs,
    color: "#68A063",
  },
  {
    name: "node",
    icon: FaNodeJs,
    color: "#68A063",
  },
  {
    name: "express",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "expressjs",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "framer",
    icon: SiFramer,
    color: "#0055FF",
  },
  {
    name: "mongodb",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "prisma",
    icon: SiPrisma,
    color: "#1B222D",
  },
  {
    name: "deno",
    icon: TbBrandDeno,
    color: "#FFFFFF",
  },
  {
    name: "denojs",
    icon: TbBrandDeno,
    color: "#FFFFFF",
  },
  {
    name: "nextjs",
    icon: TbBrandNextjs,
    color: "#FFFFFF",
  },
  {
    name: "next",
    icon: TbBrandNextjs,
    color: "#FFFFFF",
  },
  {
    name: "mysql",
    icon: DiMysql,
    color: "#4479A1",
  },
  {
    name: "github",
    icon: FaGithub,
    color: "#000000",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    color: "#0077b5",
  },
  {
    name: "twitter",
    icon: BsTwitterX,
    color: "#000000",
  },
  {
    name: "gitlab",
    icon: FaGitlab,
    color: "#FCA326",
  },
  {
    name: "dribbble",
    icon: FaDribbble,
    color: "#EA4C89",
  },
  {
    name: "discord",
    icon: FaDiscord,
    color: "#5865F2",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    color: "#BC2A8D",
  },
];
