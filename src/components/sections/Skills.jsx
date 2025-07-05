import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { DiGithubAlt } from "react-icons/di";

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        Technologies I Use.
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {[
          { icon: <FaHtml5 />, name: "HTML" },
          { icon: <FaCss3Alt />, name: "CSS" },
          { icon: <IoLogoJavascript />, name: "JavaScript" },
          { icon: <FaPython />, name: "Python" },
          { icon: <FaReact />, name: "React.js" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          { icon: <TbBrandVite />, name: "Vite" },
          { icon: <SiTensorflow />, name: "TensorFlow" },
          { icon: <FaNodeJs />, name: "Node.js" },
          { icon: <SiExpress />, name: "Express.js" },
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <FaGitAlt />, name: "Git" },
          { icon: <DiGithubAlt />, name: "GitHub" },
        ].map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 py-3 px-4 text-lg font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md hover:-translate-y-2 transform transition-all duration-300"
          >
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
