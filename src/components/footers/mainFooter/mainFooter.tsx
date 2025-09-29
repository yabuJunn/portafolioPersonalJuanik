import "./mainFooter.css"

import JuanikInteractiveLogoWhite from "../../../assets/svg/logo/JuanikInteractiveLogoWhite.svg"
import instagramIconWhite from "../../../assets/svg/icons/instagramIconWhite.svg"
import linkedinIconWhite from "../../../assets/svg/icons/linkedinIconWhite.svg"
import behanceIconWhite from "../../../assets/svg/icons/behanceIconWhite.svg"
import githubIconWhite from "../../../assets/svg/icons/githubIconWhite.svg"

export const MainFooter = () => {
    return <>
        <footer className={"main-footer-container"}>
            <p className={"main-footer-head-title"}>“Blending art, design & technology to craft immersive experiences.”</p>
            <hr />
            <div className={"main-footer-content-container"}>
                <img src={JuanikInteractiveLogoWhite} alt="Juanik Interactive logo" className="main-footer-logo" />
                <div className={"main-footer-content-container-info-container"}>
                    <h5>Follow me</h5>
                    <div className={"main-footer-info-socials-container"}>
                        <a href="https://www.instagram.com/juanda_reybs/" target="_blank" rel="noopener noreferrer"><img src={instagramIconWhite} alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/in/juan-david-reyes-barrios-0a0574296/" target="_blank" rel="noopener noreferrer"><img src={linkedinIconWhite} alt="LinkedIn" /></a>
                        <a href="https://www.behance.net/juandareyesb" target="_blank" rel="noopener noreferrer"><img src={behanceIconWhite} alt="Behance" /></a>
                        <a href="https://github.com/yabuJunn" target="_blank" rel="noopener noreferrer"><img src={githubIconWhite} alt="GitHub" /></a>
                    </div>
                </div>

                <div className={"main-footer-content-container-info-container"}>
                    <h5>Contact me</h5>
                    <div className={"main-footer-info-moreInfo-item"}>
                        <h6>Email:</h6>
                        <p>juanikbusiness@gmail.com</p>
                    </div>

                    <div className={"main-footer-info-moreInfo-item"}>
                        <h6>Call today:</h6>
                        <p>+57 317 791 4523</p>
                    </div>
                </div>

                <div className={"main-footer-content-container-info-container"}>
                    <h5>Availability</h5>
                    <p>Currently available for freelance & collaborations - 2025.</p>
                </div>

                <div className={"main-footer-content-container-info-container"}>
                    <h5>Location</h5>
                    <p>Based in Cali, Colombia - Available worldwide</p>
                </div>
            </div>
            <hr />
            <div className={"main-footer-final-content-container"}>
                <p>© 2025 Juanik Interactive — Designed & coded by me.</p>
            </div>
        </footer>
    </>
}