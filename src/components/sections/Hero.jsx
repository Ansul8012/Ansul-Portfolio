import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const roles = ["Web Developer", "DevOps Engineer", "Tech Enthusiast"];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (index < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentRole.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, roleIndex, roles]);

  return (
    <>
      {/* =========== TOP ICON + RESUME =========== */}
      <div className="flex items-center justify-between px-6 pt-6">
        <motion.img
          drag
          dragConstraints={{ top: 100 }}
          src="/ansulicon.png"
          alt="ansul icon"
          className="h-16 w-16 rounded-full shadow-md ring-2 ring-gray-400"
          initial={{ y: -10 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />

        <a
          href={user_info.main.resume}
          download
          className="flex gap-2 mr-[61vw] items-center bg-red-100 dark:bg-zinc-800 hover:bg-red-200 dark:hover:bg-zinc-700 transition-all text-red-800 dark:text-red-400 font-medium px-4 py-2 rounded-md text-sm shadow-sm"
        >
          <FaFileDownload className="text-base" />
          Download Resume
        </a>
      </div>

      {/* =========== HERO SECTION =========== */}
      <div
        id="hero"
        className="pb-28 relative bottom-8 pt-8 sm:pt-20 md:pt-24 flex flex-col px-6 lg:px-24"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
          {/* =========== TEXT SECTION =========== */}
          <div className="lg:w-3/5 text-center lg:text-left text-zinc-900 dark:text-zinc-100">
            <div className="hs-tooltip w-fit mx-auto lg:mx-0 hs-tooltip-toggle relative">
              <img
                src={user_info.main.photo}
                className="rounded-full w-16 h-16 mb-4 lg:hidden"
                alt="Ansul Singh Picture"
              />
              <span
                className="hs-tooltip-content opacity-0 invisible transition-opacity absolute z-10 top-16 left-0 right-0 mx-auto py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
                role="tooltip"
              >
                Hello! 👋 How are you doing? 🤔
              </span>
            </div>

            <h2 className="text-lg md:text-xl font-semibold mb-2 text-red-700 dark:text-red-400">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>

            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light leading-7 lg:w-[90%] mx-auto lg:mx-0">
              {user_info.main.description}
            </p>

            <div className="flex gap-3 justify-center lg:justify-start mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black dark:border-white hover:bg-red-800 hover:text-white hover:border-red-800 dark:hover:border-red-500 transition-all duration-300 font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-2 hover:gap-3 font-medium"
              >
                <span>Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          {/* =========== IMAGE SECTION =========== */}
          <div className="hidden lg:block lg:w-[400px] xl:w-[460px]">
            <img
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl transform rotate-3 hover:rotate-0 transition duration-500"
              src={user_info.main.photo}
              alt="ansul singh"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
