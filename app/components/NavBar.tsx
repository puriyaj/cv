"use client";
import { useState } from "react";
import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-center  top-0 fixed inset-x-0 inset-z-9999 sm:top-3  z-[999] ">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.04 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-sm "
          ></motion.div>
          <ul className="relative   sm:rounded-full bg-gray-100 dark:bg-gray-950 sm:w-min p-4 text-gray-600 font-medium  shadow-2xl w-full">
            <div className="flex gap-5">
              <li className="dark:hover:text-gray-100 hover:text-gray-950">
                <a href="#Up">Home</a>
              </li>
              <li className="dark:hover:text-gray-100 hover:text-gray-950">
                <a href="#About">About</a>
              </li>
              <li className="dark:hover:text-gray-100 hover:text-gray-950">
                <a href="#project">Projects</a>
              </li>
              <li className="dark:hover:text-gray-100 hover:text-gray-950">
                <a href="#skill">Skills</a>
              </li>
              <li className="dark:hover:text-gray-100 hover:text-gray-950">
                <a href="#experience">Experience</a>
              </li>
              <li className="dark:hover:text-gray-100 hover:text-gray-950">
                <a href="#contact">Contact</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
