import "./Projects.scss";
import ProjectCardLayout from "../../components/ProjectCard/ProjectCardLayout/ProjectCardLayout";
import ProjectCardTitle from "../../components/ProjectCard/ProjectCardTitle/ProjectCardTitle";
import EbayClone from "../../assets/ebay.jpg";
import neapsikraukPreview from "../../assets/neapsikrauk-preview.png";

import NftWebsiteClone from "../../assets/NFTWebsitePreview.png";
const Projects = () => {
  return (
    <section className="projects" id="projects-section-id">
      <div className="projects__wrapper">
        <span className="projects-title">PROJECTS</span>
        <div className="project-grid">
          <ProjectCardLayout
            bgImageSrc="https://nighteye.app/wp-content/uploads/2022/11/notion-image-2-after-dark-mode.png"
            projectLink="https://losion.vercel.app/"
          >
            <ProjectCardTitle>Notion Clone</ProjectCardTitle>
          </ProjectCardLayout>
          <ProjectCardLayout
            bgImageSrc={EbayClone}
            projectLink="https://ebejus.vercel.app"
          >
            <ProjectCardTitle>Ebay Clone</ProjectCardTitle>
          </ProjectCardLayout>
          <ProjectCardLayout
            bgImageSrc={neapsikraukPreview}
            projectLink="https://github.com/RojusDEV/neapsikrauk"
          >
            <ProjectCardTitle>Neapsikrauk</ProjectCardTitle>
          </ProjectCardLayout>
          <ProjectCardLayout
            bgImageSrc={NftWebsiteClone}
            projectLink="https://rojusdev.github.io/NFTWebsite/"
          >
            <ProjectCardTitle>NFT Landing Page</ProjectCardTitle>
          </ProjectCardLayout>
        </div>
      </div>
    </section>
  );
};

export default Projects;
