import "./landingContactSection.css"

import { MainButton } from "../../buttons/mainButton/mainButton"

import contactJuanikPhoto from "../../../assets/png/landingPage/contactJuanikPhoto.png"

export const LandingContactSection = () => {
    return <>
        <section className={"landingPage-section landingPage-contact"} id={"contactSection"}>
            <div className={"landingPage-contact-content-text-container"}>
                <h2 className={"landingPage-contact-content-title"}>Let’s build immersive experiences that move people.</h2>
                <h3 className={"landingPage-contact-content-subtitle"}>Contact me</h3>
                <p className={"landingPage-contact-content-description"}>Ready to bring your idea to life? I design and prototype <span>interactive spaces, sonic identities, and digital products</span> that blend art, technology and emotion. Tell me about your project; whether it’s a concept, a pilot, or a full production;  and let’s make something memorable together.</p>

                <div>
                    <MainButton
                        text="Let’s talk!"
                        bgColor="#FFC857"
                        border={false}
                        textColor="#FFFDFB"
                        hoverBgColor="#F472B6"
                        hoverTextColor="#FFFDFB"
                        actionFunction={() => {
                            console.log("Let's talk clicked");
                        }} />

                </div>
            </div>

            <div className={"landingPage-contact-content-image-container"}>
                <div className={"landingPage-contact-content-image"}>
                    <img src={contactJuanikPhoto} alt="Contact Me Photo Juanik" />
                </div>
            </div>
        </section>
    </>
}