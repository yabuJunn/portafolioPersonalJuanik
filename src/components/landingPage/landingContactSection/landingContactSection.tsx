import "./landingContactSection.css"

import { MainButton } from "../../buttons/mainButton/mainButton"
import { MainInput } from "../../inputs/mainInput/mainInput"

import contactJuanikPhoto from "../../../assets/png/landingPage/contactJuanikPhoto.png"

export const LandingContactSection = () => {
    return <>
        <section className={"landingPage-section landingPage-contact"} id={"contactSection"}>
            <div className={"landingPage-contact-content-text-container"}>
                <h2 className={"landingPage-contact-content-title"}>Let’s build immersive experiences that move people.</h2>
                <h3 className={"landingPage-contact-content-subtitle"}>Contact me</h3>
                <p className={"landingPage-contact-content-description"}>Ready to bring your idea to life? I design and prototype <span>interactive spaces, sonic identities, and digital products</span> that blend art, technology and emotion. Tell me about your project; whether it’s a concept, a pilot, or a full production;  and let’s make something memorable together.</p>

                <div>
                    <div className={"landingPage-contact-content-inputs-container"}>
                        <MainInput
                            label="Name"
                            labelColor="#FFFDFB"
                            placeholder="Who are you? (Name please)"
                            placeholderColor="#959EAC"
                            textColor="#1E293B"
                            backgroundColor="#FFFDFB"
                        />
                        <MainInput
                            label="Email"
                            labelColor="#FFFDFB"
                            placeholder="Where should I write back?"
                            placeholderColor="#959EAC"
                            textColor="#1E293B"
                            backgroundColor="#FFFDFB"
                        />
                    </div>
                    <MainInput
                        label="What services do you need?"
                        labelColor="#FFFDFB"
                        placeholder="Choose a service"
                        placeholderColor="#959EAC"
                        textColor="#1E293B"
                        backgroundColor="#FFFDFB"
                        inputType="select"
                        selectOptions={["Interactive Spaces", "Sonic Identities", "Digital Products", "Other"]}
                    />
                    <MainInput
                        label="Leave a message"
                        labelColor="#FFFDFB"
                        placeholder="Tell me about your idea, goals or timeline…"
                        placeholderColor="#959EAC"
                        textColor="#1E293B"
                        backgroundColor="#FFFDFB"
                        stretch={true}
                        inputType="textarea"
                    />
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
            </div>

            <div className={"landingPage-contact-content-image-container"}>
                <div className={"landingPage-contact-content-image"}>
                    <img src={contactJuanikPhoto} alt="Contact Me Photo Juanik" />
                </div>
            </div>
        </section>
    </>
}