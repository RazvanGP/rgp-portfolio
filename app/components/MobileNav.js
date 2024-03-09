"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import navItems from "../utils/navItems";

const MobileNav = ({ setShowMobileNav }) => {
  return (
    <aside className="fixed top-0 right-0 min-h-screen scroll-none flex justify-center items-center backdrop-blur-md bg-slate-950 opacity-90 p-5">
      <ul className="min-h-[400px] flex flex-col items-center justify-evenly text-silver-grey text-2xl font-light">
        {navItems?.map((item, index) => (
          <motion.li
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: index * 0.05, type: "spring" },
            }}
            whileHover={{
              scale: 1.2,
              transition: { delay: 0.1 },
            }}
            className="hover:text-red-500 z-10"
          >
            <Link
              href={`/#${item.href}`}
              className="uppercase"
              onClick={() => setShowMobileNav(false)}
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
};

export default MobileNav;
