"use client";
import type { Metadata } from "next";
import { roboto, edu } from "./fonts";
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Dark from "./components/dark";
import ThemeContextProvider from "./context/theme";
import { motion } from "framer-motion";
// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "My Portfolio",
// };


// kick off the polyfill!

export default function RootLayout({
  children ,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${(roboto.variable, edu.variable)}`}
    >
      <body className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 ">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="bg-[#65e3f9] absolute top-[10rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full filter blur-[10rem] sm:w-[68.75rem] dark:bg-[#8e5c5c]"
        ></motion.div>

        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="bg-[#ce32dc] absolute top-[10rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full filter blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#6f64e7]"
        ></motion.div>

        <header>
          <NavBar />
        </header>

        <ThemeContextProvider>
          <div className="grow m-0 relative">
            <main>{children}</main>
          </div>

          <Footer />
          <Dark />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
