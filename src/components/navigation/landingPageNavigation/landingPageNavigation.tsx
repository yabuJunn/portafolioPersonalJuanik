import "./landingPageNavigation.css"

import { MainButton } from "../../buttons/mainButton/mainButton"

import logoJI from "../../../assets/svg/logoJI.svg"

export const LandingPageNavigation = () => {
    return <>
        <nav className={"landingPage-navigation-container"}>
            <img src={logoJI} alt="logo" />
            <ul>
                <li onClick={() => {
                    const section = document.getElementById("headerSection");
                    section?.scrollIntoView({ behavior: "smooth" });
                }}>Home</li>
                <li onClick={() => {
                    const section = document.getElementById("servicesSection");
                    section?.scrollIntoView({ behavior: "smooth" });
                }}>Services</li>
                <li onClick={() => {
                    const section = document.getElementById("aboutMeSection");
                    section?.scrollIntoView({ behavior: "smooth" });
                }}>About Me</li>

                <li onClick={() => {
                    const section = document.getElementById("projectsSection");
                    section?.scrollIntoView({ behavior: "smooth" });
                }}>Projects</li>
            </ul>
            <MainButton
                text="Contact Me"
                bgColor="#2563EB"
                textColor="#FFFDFB"
                hoverBgColor="#FFC857"
                hoverBorderColor="transparent"
                height="80%"
                actionFunction={() => {
                    const section = document.getElementById("contactSection");
                    section?.scrollIntoView({ behavior: "smooth" });
                }} />
        </nav >
    </>
}