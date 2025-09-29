import "./landingContactSection.css";

import { useState } from "react";
import { MainButton } from "../../buttons/mainButton/mainButton";
import { MainInput } from "../../inputs/mainInput/mainInput";

import contactJuanikPhoto from "../../../assets/webp/contactJuanikPhoto.webp";

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

    const templateParams = {
      from_name: name,
      from_email: email,
      service_required: service,
      message: message,
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
    <section className="landingPage-section landingPage-contact" id="contactSection" aria-labelledby="contact-title">
      <div className="landingPage-contact-inner">
        <div className="landingPage-contact-content-text-column">
          <h2 id="contact-title" className="landingPage-contact-content-title">Let’s build immersive experiences that move people.</h2>
          <h3 className="landingPage-contact-content-subtitle">Contact me</h3>
          <p className="landingPage-contact-content-description">
            Ready to bring your idea to life? I design and prototype <span>interactive spaces, sonic identities, and digital products</span> that blend art, technology and emotion.
            Tell me about your project; whether it’s a concept, a pilot, or a full production; and let’s make something memorable together.
          </p>

          <div className="landingPage-contact-form">
            <div className="landingPage-contact-content-inputs-container form-row">
              <div className="form-col">
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
              </div>

              <div className="form-col">
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

            <div className="landingPage-contact-actions">
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
                <div className={`text-status ${status.ok ? "ok" : "err"}`}>
                  {status.text}
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="landingPage-contact-content-image-column" aria-hidden="true">
          <div className="landingPage-contact-content-image">
            <img src={contactJuanikPhoto} alt="Portrait Juanik" />
          </div>
        </aside>
      </div>
    </section>
  );
};
