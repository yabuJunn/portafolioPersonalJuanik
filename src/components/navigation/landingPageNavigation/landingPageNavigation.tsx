import "./landingPageNavigation.css"

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
            <button>Contact Me</button>
        </nav>
    </>
}