import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import user_info from "../data/user_info.js";
import { MdEmail } from "react-icons/md";

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />

        <Hero />
        <Projects />
        <div className="flex flex-col items-center justify-center mt-12 px-6 lg:px-24">
          <span className="text-center text-zinc-500 dark:text-zinc-400 text-sm mt-4 mb-8 border-b-2 border-red-900">
            I am currently building AI Smart driven Libraray .. I would love to
            get feedback and suggestions on the project...
          </span>
          <a
            href={`mailto:${user_info.main.email}`}
            className="flex text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-30"
          >
            <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
            <span>{user_info.main.email}</span>
          </a>
        </div>
        <EducationAndExperience />
        <Skills />
        <Contact />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;
