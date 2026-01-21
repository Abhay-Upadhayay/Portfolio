
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {RiCodeBoxLine} from "@remixicon/react"

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around  bg-[#465697] text-white p-4 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm pr-4 text-start md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:uabhay112005@gmail.com">uabhay112005@gmail.com</a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20}  />
          <a href="https://www.linkedin.com/in/abhay-upadhayay-b4a431219/">Linkedin/Abhay-Upadhayay</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a href="https://github.com/Abhay-Upadhayay">GitHub/Abhay-Upadhayay</a>
        </li>
        <li className="flex gap-1 items-center">
          <RiCodeBoxLine size={20} />
          <a href="https://leetcode.com/u/BLZY3gwqYd/">LeetCode/Abhay-Upadhayay</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
