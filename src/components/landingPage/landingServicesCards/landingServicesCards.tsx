import "./landingServicesCards.css"

import arrowRigthBlue from "../../../assets/svg/landingPage/arrowRightBlue.svg"
import iconMock from "../../../assets/svg/icons/personIconBlue.svg"


export const LandingServicesCards = () => {
    return <>
        <div className={"landingPage-services-content-cards-container"}>
            <div className={"landingPage-services-content-cards-container-icon"}>
                <img src={iconMock} alt={iconMock} />
            </div>

            <h4>Experiencias Interactivas & Prototipado</h4>
            <p>Creación de instalaciones y prototipos interactivos (web, sensores, mapping) que combinan sonido, visuales y hardware para eventos, museos y espacios experienciales.</p>

            <div className={"landingPage-services-content-cards-container-learn-more"}>
                <p>Learn more</p>
                <img src={arrowRigthBlue} alt={arrowRigthBlue} />
            </div>

        </div>
    </>
}