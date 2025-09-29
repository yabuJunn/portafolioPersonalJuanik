import "./landingHeaderSection.css"

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon"
import { MainButton } from "../../buttons/mainButton/mainButton"

import landingPageHeaderImage from "../../../assets/webp/landingPageHeaderPhoto.webp"
import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg"

export const LandingHeaderSectionContent = () => {
    return <>
        <div className={"landingPage-header-content-text"} id={"headerSection"}>
            <h1>Hello I’m <span>Juanik</span>,<br></br> Interactive Media Designer & Music Producer</h1>
            <p>I’m an Interactive Media Designer and Musician, focused on creating immersive user experiences that merge art, technology, and sound. I combine UX/UI design, creative coding, and music production to develop innovative projects that inspire and generate real impact.</p>

            <div className={"landingPage-header-content-text-buttons"}>
                <ButtonWithIcon text="View my portfolio" icon={arrowRigthDark} bgColor="#FF6F3C" hoverTextColor="#FFFDFB" actionFunction={() => { console.log("View my portfolio clicked") }} />

                <MainButton text="Hire me" actionFunction={() => {
                    const section = document.getElementById("contactSection"); // 👈 id del destino
                    section?.scrollIntoView({ behavior: "smooth" }); // 👈 scroll suave
                }} />
            </div>
        </div>

        <div className={"landingPage-header-content-image"}>
            <img src={landingPageHeaderImage} alt="Landing Page Header Juanik Photo" />
        </div>
    </>
}