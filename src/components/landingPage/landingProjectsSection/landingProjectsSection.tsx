import "./landingProjectsSection.css"

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon"
import { LandingTitleText } from "../landingTitleText/landingTitleText"
import { LandingProjectCard } from "../landingProjectCard/landingProjectCard"

import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg"
import projectImage1 from "../../../assets/jpg/landing/projectJaramilloMora.jpg"
import projectImage2 from "../../../assets/jpg/landing/projectLudos.jpg"
import projectImage3 from "../../../assets/jpg/landing/projectCapy.jpg"

export const LandingProjectsSection = () => {
    return <>
        <section className={"landingPage-section landingPage-Projects"} id={"projectsSection"}>
            <div className={"landingPage-projects-content-text-header-container"}>
                <h3 className={"landingPage-projects-content-text-header-title"}>Projects</h3>
                <div className={"landingPage-projects-content-text-header"}>
                    <LandingTitleText highlightText="Projects" titleText="that I have worked on" />
                    <ButtonWithIcon text="View all my projects" icon={arrowRigthDark} bgColor="#FF6F3C" hoverTextColor="#FFFDFB" actionFunction={() => { console.log("View my portfolio clicked") }} />
                </div>

                <div className={"landingPage-projects-cards-container"}>
                    <LandingProjectCard
                        cardTitle="Tu camino a casa"
                        cardSubtitle="UX/UI for Constructora Jaramillo Mora"
                        cardDescription="I designed and prototyped a web platform to improve home search and purchase decisions. I conducted field interviews, mapped user flows, and led the development of the functional prototype, delivering a clearer and more efficient experience for potential clients."
                        cardImage={projectImage1} 
                        cardProjectLink="https://www.behance.net/gallery/227819111/Tu-camino-a-casa-UXUI-Design"/>
                    <LandingProjectCard
                        cardTitle="Ludos: Biofonías"
                        cardSubtitle="Live music & projection mapping"
                        cardDescription="I led the creation and performance of a live audiovisual piece that combined composed music with reactive video projection mapping. The work layered realtime visuals with an electroacoustic soundscape, producing an immersive, “audiovisual jungle” where image and sound responded to each."
                        cardImage={projectImage2} 
                        cardProjectLink="https://www.instagram.com/p/DKqQeE8N1hP/?utm_source=ig_web_copy_link&igsh=ZTV1MWE3eG90Z2I5"/>
                    <LandingProjectCard
                        cardTitle="CAPY: Web finances"
                        cardSubtitle="Front-end for a responsive web platform"
                        cardDescription="A responsive web platform focused on polished UX and heavy front-end development. I led UX tasks and implemented the interface using HTML/CSS and TypeScript, turning high-fidelity designs into an interactive prototype with refined user flows and production-grade code."
                        cardImage={projectImage3} 
                        cardProjectLink="https://www.behance.net/gallery/213734287/CAPY-WEB"/>
                </div>
            </div>
        </section>
    </>
}