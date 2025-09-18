import "./landingProjectsSection.css"

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon"
import { LandingTitleText } from "../landingTitleText/landingTitleText"

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
            </div>
        </section>
    </>
}