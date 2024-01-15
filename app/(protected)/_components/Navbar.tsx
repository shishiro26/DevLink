"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import UserButton from "@/app/(protected)/_components/UserButton";
import { navItems } from "@/constants";
import { Search } from "lucide-react";
import { useEffect } from "react";

const Sidebar = () => {
  const controls = useAnimation();

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 120 },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const listItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.aside
      id="separator-sidebar"
      className={`z-40 h-screen transition-transform bg-[#83A2FF]`}
      aria-label="Sidebar"
      initial="hidden"
      animate={controls}
      variants={sidebarVariants}
    >
      <div className="h-full py-4 overflow-y-auto">
        <motion.ul
          className="space-y-2 font-medium flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.li variants={listItemVariants}>
            <Link
              href={"/search"}
              className="h-12 w-12 bg-[#FF5964] flex items-center justify-center rounded-lg"
            >
              <Search className="rounded-full text-white" />
            </Link>
          </motion.li>
          {navItems.map((item) => (
            <motion.li key={item.name} variants={listItemVariants}>
              <Link href={item.path}>
                <div className="flex flex-col gap-2 items-center text-gray-700 p-2 rounded-lg group">
                  <div className="hover:bg-[#7D80DA] w-14 flex rounded-full justify-center p-1 transition-all nav__mg04a">
                    {item.icon && (
                      <item.icon className="nav__mg03a text-white" />
                    )}
                  </div>
                  <span className="text-[0.9vw] whitespace-nowrap text-white">
                    {item.name}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
          <motion.li variants={listItemVariants}>
            <UserButton />
          </motion.li>
        </motion.ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
