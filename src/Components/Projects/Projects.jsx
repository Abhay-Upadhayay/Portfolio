
import ProjectCard from "./ProjectCard";
import portfolioBanner from "../../assets/portfolioBanner.png"
import socialMediaBanner from "../../assets/socialMediaBanner.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex justify-center flex-wrap gap-5">
        <ProjectCard
          title="Social Media Website"
          main="A backend oriented project to understand backend-flow. Created using Ejs(for SSR) , Nodejs , MongoDB."
          bannerImg={socialMediaBanner}
          demo={`https://socialmedia-website-knm2.onrender.com`}
          code={`https://github.com/Abhay-Upadhayay/Socialmedia-website`}
        />
        <ProjectCard
          title="This PortFolio"
          main="This is a Responsive portfolio website created using React , TailwindCSS , JavaScript."
          bannerImg={portfolioBanner}
          code={`https://github.com/Abhay-Upadhayay`}
        />
      </div>
    </div>
  );
};

export default Projects;
