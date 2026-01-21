
import avatarImg from "../../assets/avatar1.png";
import TextChange from "../TextChange";
import myCv from '../../assets/Abhay_Upadhyay_cv_2305.pdf'


const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row  w-full  items-center md:justify-between md:items-start p-10 md:p-20">
      <div className=" md:w-2/4 md:pt-20 ">
        <h1 className="text-xl md:text-4xl font-bold flex leading-normal tracking-tighter mb-2">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight  mb-5">
          A Full Stack Developer in the learning phase, exploring frontend and backend technologies. Eager to build meaningful projects and expand my programming knowledge.
        </p>
        <a download="Abhay_Upadhayay_CV.pdf" href={myCv} className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Download CV
        </a>
      </div>
      <div className="flex justify-center items-center p-6">
        <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-tr from-[#465697] to-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-lg" src={avatarImg} alt="Abhay Upadhayay" />
        </div>
      </div>
    </div>
  );
};

export default Home;
