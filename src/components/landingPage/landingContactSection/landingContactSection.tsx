import "./landingContactSection.css";

import { useState } from "react";
import { MainButton } from "../../buttons/mainButton/mainButton";
import { MainInput } from "../../inputs/mainInput/mainInput";

import contactJuanikPhoto from "../../../assets/png/landingPage/contactJuanikPhoto.png";

import { send } from "@emailjs/browser";

export const LandingContactSection = () => {
    // estado del formulario (controlado)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

    const validateEmail = (mail: string) => {
        return /^\S+@\S+\.\S+$/.test(mail);
    };

    const handleSubmit = async () => {
        setStatus(null);

        if (!name.trim()) {
            setStatus({ ok: false, text: "Please enter your name." });
            return;
        }
        if (!validateEmail(email)) {
            setStatus({ ok: false, text: "Please enter a valid email." });
            return;
        }
        if (!service) {
            setStatus({ ok: false, text: "Please select a service." });
            return;
        }
        if (!message.trim()) {
            setStatus({ ok: false, text: "Please leave a short message." });
            return;
        }

        setLoading(true);

        // Template params para EmailJS (ajusta campos al template que crees)
        const templateParams = {
            from_name: name,
            from_email: email,
            service_required: service,
            message: message,
            // you can add more fields here if your template expects them
        };

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS not configured. Set environment variables.");
            }

            await send(serviceId, templateId, templateParams, publicKey);

            setStatus({ ok: true, text: "Message sent! I will reply soon." });
            // limpiar formulario (opcional)
            setName("");
            setEmail("");
            setService("");
            setMessage("");
        } catch (err) {
            console.error("Email send error:", err);
            setStatus({ ok: false, text: "There was an error sending your message. Try again later." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={"landingPage-section landingPage-contact"} id={"contactSection"}>
            <div className={"landingPage-contact-content-text-container"}>
                <h2 className={"landingPage-contact-content-title"}>Let’s build immersive experiences that move people.</h2>
                <h3 className={"landingPage-contact-content-subtitle"}>Contact me</h3>
                <p className={"landingPage-contact-content-description"}>
                    Ready to bring your idea to life? I design and prototype <span>interactive spaces, sonic identities, and digital products</span> that blend art, technology and emotion.
                    Tell me about your project; whether it’s a concept, a pilot, or a full production; and let’s make something memorable together.
                </p>

                <div>
                    <div className={"landingPage-contact-content-inputs-container"}>
                        <MainInput
                            id="contact-name"
                            label="Name"
                            labelColor="#FFFDFB"
                            placeholder="Who are you? (Name please)"
                            placeholderColor="#959EAC"
                            textColor="#1E293B"
                            backgroundColor="#FFFDFB"
                            value={name}
                            onChange={(v) => setName(v)}
                        />
                        <MainInput
                            id="contact-email"
                            label="Email"
                            labelColor="#FFFDFB"
                            placeholder="Where should I write back?"
                            placeholderColor="#959EAC"
                            textColor="#1E293B"
                            backgroundColor="#FFFDFB"
                            inputType="email"
                            value={email}
                            onChange={(v) => setEmail(v)}
                        />
                    </div>

                    <MainInput
                        id="contact-service"
                        label="What services do you need?"
                        labelColor="#FFFDFB"
                        placeholder="Choose a service"
                        placeholderColor="#959EAC"
                        textColor="#1E293B"
                        backgroundColor="#FFFDFB"
                        inputType="select"
                        selectOptions={["Interactive Spaces", "Sonic Identities", "Digital Products", "Other"]}
                        value={service}
                        onChange={(v) => setService(v)}
                    />

                    <MainInput
                        id="contact-message"
                        label="Leave a message"
                        labelColor="#FFFDFB"
                        placeholder="Tell me about your idea, goals or timeline…"
                        placeholderColor="#959EAC"
                        textColor="#1E293B"
                        backgroundColor="#FFFDFB"
                        stretch={true}
                        inputType="textarea"
                        value={message}
                        onChange={(v) => setMessage(v)}
                    />

                    <div style={{ marginTop: "1rem", display: "flex", gap: 12, alignItems: "center" }}>
                        <MainButton
                            text={loading ? "Sending…" : "Let’s talk!"}
                            bgColor="#FFC857"
                            border={false}
                            textColor="#FFFDFB"
                            hoverBgColor="#F472B6"
                            hoverTextColor="#FFFDFB"
                            actionFunction={handleSubmit}
                            height="48px"
                        />

                        {status && (
                            <div style={{ color: status.ok ? "#10B981" : "#EF4444", fontWeight: 600 }} className={"text-status"}>
                                {status.text}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={"landingPage-contact-content-image-container"}>
                <div className={"landingPage-contact-content-image"}>
                    <img src={contactJuanikPhoto} alt="Contact Me Photo Juanik" />
                </div>
            </div>
        </section>
    );
};
