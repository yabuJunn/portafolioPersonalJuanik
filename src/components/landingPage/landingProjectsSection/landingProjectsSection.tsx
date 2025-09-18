import "./landingProjectsSection.css"

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon"
import { LandingTitleText } from "../landingTitleText/landingTitleText"
import { LandingProjectCard } from "../landingProjectCard/landingProjectCard"

import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg"

export const LandingProjectsSection = () => {
    return <>
        <section className={"landingPage-section landingPage-Projects"} id={"projectsSection"}>
            <div className={"landingPage-projects-content-text-header-container"}>
                <h3 className={"landingPage-projects-content-text-header-title"}>Projects</h3>
                <div className={"landingPage-projects-content-text-header"}>
                    <LandingTitleText highlightText="Projects" titleText="that I have worked on" />
                    <ButtonWithIcon text="View my portfolio" icon={arrowRigthDark} bgColor="#FF6F3C" hoverTextColor="#FFFDFB" actionFunction={() => { console.log("View my portfolio clicked") }} />
                </div>

                <div className={"landingPage-projects-cards-container"}>
                    <LandingProjectCard cardTitle="Tu camino a casa" cardSubtitle="UX/UI for Constructora Jaramillo Mora" cardDescription="I designed and prototyped a web platform to improve home search and purchase decisions. I conducted field interviews, mapped user flows, and led the development of the functional prototype, delivering a clearer and more efficient experience for potential clients." cardImage="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg"/>
                    <LandingProjectCard cardTitle="Ludos: Biofonías" cardSubtitle="Live music & projection mapping" cardDescription="I led the creation and performance of a live audiovisual piece that combined composed music with reactive video projection mapping. The work layered realtime visuals with an electroacoustic soundscape, producing an immersive, “audiovisual jungle” where image and sound responded to each." cardImage="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg"/>
                    <LandingProjectCard cardTitle="CAPY: Web finances" cardSubtitle="Front-end for a responsive web platform" cardDescription="A responsive web platform focused on polished UX and heavy front-end development. I led UX tasks and implemented the interface using HTML/CSS and TypeScript, turning high-fidelity designs into an interactive prototype with refined user flows and production-grade code." cardImage="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg"/>
                </div>
            </div>
        </section>
    </>
}