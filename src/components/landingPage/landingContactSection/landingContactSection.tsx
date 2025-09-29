import "./landingContactSection.css";

import { useState } from "react";
import { MainButton } from "../../buttons/mainButton/mainButton";
import { MainInput } from "../../inputs/mainInput/mainInput";
import { useI18n } from "../../../i18n";


import contactJuanikPhoto from "../../../assets/webp/contactJuanikPhoto.webp";

import { send } from "@emailjs/browser";

export const LandingContactSection = () => {
  const { t } = useI18n()

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
      setStatus({ ok: false, text: t("landingPage.contact.form.validation.nameRequired") })
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ ok: false, text: t("landingPage.contact.form.validation.emailInvalid") });
      return;
    }
    if (!service) {
      setStatus({ ok: false, text: t("landingPage.contact.form.validation.serviceRequired") });
      return;
    }
    if (!message.trim()) {
      setStatus({ ok: false, text: t("landingPage.contact.form.validation.messageRequired") });
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

      setStatus({ ok: true, text: t("landingPage.contact.form.status.success") })
      setName("");
      setEmail("");
      setService("");
      setMessage("");
    } catch (err) {
      console.error("Email send error:", err);
      setStatus({ ok: false, text: t("landingPage.contact.form.status.error") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="landingPage-section landingPage-contact" id="contactSection" aria-labelledby="contact-title">
      <div className="landingPage-contact-inner">
        <div className="landingPage-contact-content-text-column">

          <h2 id="contact-title" className="landingPage-contact-content-title">{t("landingPage.contact.sectionTitle")}</h2>
          <h3 className="landingPage-contact-content-subtitle">{t("landingPage.contact.subtitle")}</h3>
          <p className="landingPage-contact-content-description">{t("landingPage.contact.paragraph")}</p>

          <div className="landingPage-contact-form">
            <div className="landingPage-contact-content-inputs-container form-row">
              <div className="form-col">
                <MainInput
                  id="contact-name"
                  label={t("landingPage.contact.form.labels.name")}
                  labelColor="#FFFDFB"
                  placeholder={t("landingPage.contact.form.placeholders.name")}
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
                  label={t("landingPage.contact.form.labels.email")}
                  labelColor="#FFFDFB"
                  placeholder={t("landingPage.contact.form.placeholders.email")}
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
              label={t("landingPage.contact.form.labels.service")}
              labelColor="#FFFDFB"
              placeholder={t("landingPage.contact.form.placeholders.service")}
              placeholderColor="#959EAC"
              textColor="#1E293B"
              backgroundColor="#FFFDFB"
              inputType="select"
              selectOptions={[
                t("landingPage.contact.form.selectOptions.interactiveSpaces"),
                t("landingPage.contact.form.selectOptions.sonicIdentities"),
                t("landingPage.contact.form.selectOptions.digitalProducts"),
                t("landingPage.contact.form.selectOptions.other")
              ]}
              value={service}
              onChange={(v) => setService(v)}
            />

            <MainInput
              id="contact-message"
              label={t("landingPage.contact.form.labels.message")}
              labelColor="#FFFDFB"
              placeholder={t("landingPage.contact.form.placeholders.message")}
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
                text={loading ? t("landingPage.contact.form.buttons.sending") : t("landingPage.contact.form.buttons.send")}
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
            <img src={contactJuanikPhoto} alt={t("landingPage.contact.imageAlt")} />
          </div>
        </aside>
      </div>
    </section>
  );
};
