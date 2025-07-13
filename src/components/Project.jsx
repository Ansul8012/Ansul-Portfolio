import { CiLink } from "react-icons/ci";
import { motion } from "framer-motion";
import user_info from "../data/user_info.js";
import { MdEmail } from "react-icons/md";

function Project({
  title,
  description,
  technologies,
  link,
  demo,
  github,
  status,
}) {
  const isBuilding = status?.toLowerCase() === "building";

  return (
    <div
      className={`transition-all duration-300 p-6 md:rounded-xl ${
        isBuilding
          ? "border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/10 shadow-md shadow-yellow-300/10"
          : "hover:bg-zinc-100 hover:dark:bg-zinc-900 border border-dashed border-red-400"
      }`}
    >
      {/* TECHNOLOGIES */}
      <div className="flex gap-2 overflow-x-auto py-2">
        {technologies.split(",").map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
          >
            {tech.trim()}
          </span>
        ))}
      </div>

      {/* TITLE + BUILDING STATUS */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4 flex items-center gap-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      {/* LINKS */}
      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {link && (
          <a
            href={link}
            className="flex gap-2 mt-4 hover:text-red-800 dark:hover:text-red-500 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">View Project</span>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className="flex gap-2 mt-4 hover:text-red-800 dark:hover:text-red-500 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">View Demo</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            className="flex gap-2 mt-4 hover:text-red-800 dark:hover:text-red-500 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">View Github</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
