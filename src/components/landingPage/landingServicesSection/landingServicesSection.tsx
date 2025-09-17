import "./landingServicesSection.css"

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon"
import { LandingTitleText } from "../landingTitleText/landingTitleText"
import { LandingServicesCards } from "../landingServicesCards/landingServicesCards"

import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg"
import desktopIconBlue from "../../../assets/svg/icons/desktopIconBlue.svg"
import musicIconBlue from "../../../assets/svg/icons/musicIconBlue.svg"
import personIconBlue from "../../../assets/svg/icons/personIconBlue.svg"

export const LandingServicesSection = () => {
    return <>
        <section className={"landingPage-section landingPage-services"} id={"servicesSection"}>
            <div className={"landingPage-services-content-text-header-container"}>
                <h3 className={"landingPage-services-content-text-header-title"}>Services</h3>
                <div className={"landingPage-services-content-text-header"}>
                    <LandingTitleText highlightText="Services" titleText="that I provide" />
                    <ButtonWithIcon text="View my portfolio" icon={arrowRigthDark} bgColor="#FF6F3C" hoverTextColor="#FFFDFB" actionFunction={() => { console.log("View my portfolio clicked") }} />
                </div>

                <div className={"landingPage-services-cards-container"}>
                    <LandingServicesCards
                        cardTitle="Diseño UX / UI"
                        cardDescription="Diseño de interfaces y flujos centrados en el usuario: wireframes, prototipos navegables y pruebas de usabilidad para productos digitales que maximizan la experiencia y conversión."
                        cardIcon={personIconBlue}
                    />
                    <LandingServicesCards
                        cardTitle="Experiencias Interactivas & Prototipado"
                        cardDescription="Creación de instalaciones y prototipos interactivos (web, sensores, mapping) que combinan sonido, visuales y hardware para eventos, museos y espacios experienciales."
                        cardIcon={desktopIconBlue}
                    />
                    <LandingServicesCards
                        cardTitle="Producción Musical & Diseño Sonoro"
                        cardDescription="Composición, diseño de texturas sonoras, mezcla y creación de branding sonoro para proyectos multimedia, instalaciones y contenidos audiovisuales. Entrega de stems y guías de uso."
                        cardIcon={musicIconBlue}
                    />
                </div>
            </div>
        </section>
    </>
}