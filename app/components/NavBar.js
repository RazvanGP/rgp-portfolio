"use client";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import navItems from "../utils/navItems";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const variants = {
    open1: { rotate: 45, y: "10px" },
    open2: { rotate: -45 },
    close: { rotate: 0 },
  };

  //temporary solution
  useEffect(() => {
    showMobileNav
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [showMobileNav]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="text-colorDarkBlue flex justify-between p-4 w-full fixed top-0 bg-transparent z-10 px-10"
    >
      <Link
        href="/"
        className={`${dancingScript.className} text-3xl font-black`}
      >
        Razvan Plîngu
      </Link>

      <div className="hidden md:flex gap-10 font-secondary">
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={`/#${item.href}`}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="md:hidden flex flex-col items-end gap-2 z-10 group"
        onClick={() => {
          setShowMobileNav(!showMobileNav);
        }}
      >
        <motion.div
          variants={variants}
          initial={"close"}
          animate={showMobileNav ? "open1" : "close"}
          className={`min-w-[30px] bg-slate-600 min-h-[2px] ${
            showMobileNav
              ? "group-hover:bg-red-500"
              : "group-hover:bg-colorAccentBlue "
          }`}
        ></motion.div>
        {!showMobileNav && (
          <div
            className={`min-w-[20px] bg-slate-600 min-h-[2px] ${
              showMobileNav
                ? "group-hover:bg-red-500"
                : "group-hover:bg-colorAccentBlue "
            }`}
          ></div>
        )}
        <motion.div
          variants={variants}
          initial={"close"}
          animate={showMobileNav ? "open2" : "close"}
          className={`min-w-[30px] bg-slate-600 min-h-[2px] ${
            showMobileNav
              ? "group-hover:bg-red-500"
              : "group-hover:bg-colorAccentBlue dark:group-hover:bg-dark-accent-blue"
          }`}
        ></motion.div>
      </motion.button>

      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}
    </motion.nav>
  );
};

export default NavBar;
