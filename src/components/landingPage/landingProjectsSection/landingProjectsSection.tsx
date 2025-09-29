import "./landingProjectsSection.css";

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon";
import { LandingTitleText } from "../landingTitleText/landingTitleText";
import { LandingProjectCard } from "../landingProjectCard/landingProjectCard";

import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg";
import projectImage1 from "../../../assets/webp/projectJaramilloMora.webp";
import projectImage2 from "../../../assets/webp/projectLudos.webp";
import projectImage3 from "../../../assets/webp/projectCapy.webp";

export const LandingProjectsSection = () => {
  return (
    <section className="landingPage-section landingPage-projects" id="projectsSection" aria-labelledby="projects-title">
      <div className="landingPage-projects-inner">
        <h3 id="projects-title" className="landingPage-projects-small-title">Projects</h3>

        <div className="landingPage-projects-header">
          <LandingTitleText highlightText="Projects" titleText="that I have worked on" />
          <div className="projects-header-action">
            <ButtonWithIcon
              text="View all my projects"
              icon={arrowRigthDark}
              bgColor="#FF6F3C"
              hoverTextColor="#FFFDFB"
              actionFunction={() => { console.log("View all projects clicked"); }}
            />
          </div>
        </div>

        <div className="landingPage-projects-cards-grid">
          <LandingProjectCard
            cardTitle="Tu camino a casa"
            cardSubtitle="UX/UI for Constructora Jaramillo Mora"
            cardDescription="I designed and prototyped a web platform to improve home search and purchase decisions. I conducted field interviews, mapped user flows, and led the development of the functional prototype."
            cardImage={projectImage1}
            cardProjectLink="https://www.behance.net/gallery/227819111/Tu-camino-a-casa-UXUI-Design"
          />
          <LandingProjectCard
            cardTitle="Ludos: Biofonías"
            cardSubtitle="Live music & projection mapping"
            cardDescription="Led the creation of a live audiovisual piece combining composed music and reactive video projection mapping, generating an immersive electroacoustic soundscape that interacted with visuals."
            cardImage={projectImage2}
            cardProjectLink="https://www.instagram.com/p/DKqQeE8N1hP/?utm_source=ig_web_copy_link&igsh=ZTV1MWE3eG90Z2I5"
          />
          <LandingProjectCard
            cardTitle="CAPY: Web finances"
            cardSubtitle="Front-end for a responsive web platform"
            cardDescription="Built a responsive front-end focused on polished UX and high-quality code using HTML/CSS and TypeScript, translating high-fidelity designs into an interactive prototype."
            cardImage={projectImage3}
            cardProjectLink="https://www.behance.net/gallery/213734287/CAPY-WEB"
          />
        </div>
      </div>
    </section>
  );
};
