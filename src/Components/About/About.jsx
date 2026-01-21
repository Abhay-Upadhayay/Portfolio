
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white  md:flex md:flex-col overflow-hidden items-center md:flex-wrap md:items-start bg-black shadow-xl mx-10 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center md:px-24">
          

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className=" ">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Who I Am 
                </h1>
                <p className="text-sm md:text-xl font-extralight leading-tight">
                  I’m a motivated Full Stack Developer learning to build web applications using modern technologies like HTML, CSS, and JavaScript. I’m naturally curious and love exploring new tech areas, especially AI-related technologies.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  What I Do
                </h1>
                <p className="text-sm md:text-xl font-extralight leading-tight">
                  I work on small projects to improve my coding skills and create practical, real-world applications. I enjoy experimenting with AI tools and integrating them into my projects to make them smarter and more interactive.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  My Goal
                </h1>
                <p className="text-sm md:text-xl font-extralight leading-tight">
                  I aim to grow as a developer, expand my knowledge of web and AI technologies, and contribute to projects that make a meaningful impact. I’m always eager to take on new challenges and keep learning.
                </p>
              </span>
            </div>
          </ul>
        </div>
     
    </div>
  );
};

export default About;
