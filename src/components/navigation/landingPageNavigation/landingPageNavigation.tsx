import "./landingPageNavigation.css"

import { MainButton } from "../../buttons/mainButton/mainButton"

import logoJI from "../../../assets/svg/logoJI.svg"

export const LandingPageNavigation = () => {
    return <>
        <nav className={"landingPage-navigation-container"}>
            <img src={logoJI} alt="logo" />
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Portfolio</li>
            </ul>
            {/* <button>Contact Me</button> */}
            <MainButton text="Contact Me" bgColor="#2563EB" textColor="#FFFDFB" hoverBgColor="#FFC857" hoverBorderColor="transparent"  height="80%" actionFunction={() => { console.log("Contact Me clicked") }} />
        </nav>
    </>
}