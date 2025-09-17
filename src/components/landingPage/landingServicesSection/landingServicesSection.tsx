import "./landingServicesSection.css"

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon"
import { LandingTitleText } from "../landingTitleText/landingTitleText"

import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg"

export const LandingServicesSection = () => {
    return <>
        <section className={"landingPage-section landingPage-services"}>
            <div className={"landingPage-services-content-text-header-container"}>
                <h3 className={"landingPage-services-content-text-header-title"}>Services</h3>
                <div className={"landingPage-services-content-text-header"}>
                    <LandingTitleText highlightText="Services" titleText="that I provide" />
                    <ButtonWithIcon text="View my portfolio" icon={arrowRigthDark} bgColor="#FF6F3C" hoverTextColor="#FFFDFB" actionFunction={() => { console.log("View my portfolio clicked") }} />
                </div>
            </div>
        </section>
    </>
}