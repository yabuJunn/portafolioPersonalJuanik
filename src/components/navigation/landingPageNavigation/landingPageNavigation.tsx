import { useEffect, useState } from "react";
import "./landingPageNavigation.css";

import { MainButton } from "../../buttons/mainButton/mainButton";
import { LanguageSwitcher } from "../../language/languageSwitcher/languageSwitcher";
import { useI18n } from "../../../i18n";

import logoJI from "../../../assets/svg/logoJI.svg";

export const LandingPageNavigation = () => {
  const { t } = useI18n()

  const [open, setOpen] = useState(false);

  // lock body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id?: string) => {
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!id) return;
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <>
      <nav className={"landingPage-navigation-container"} aria-label="Main Navigation">
        <img
          src={logoJI}
          alt="logo"
          role="button"
          onClick={() => scrollTo("top")}
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? scrollTo("top") : null)}
        />

        <LanguageSwitcher></LanguageSwitcher>

        {/* desktop / tablet menu */}
        <ul className="nav-list">
          <li onClick={() => scrollTo("top")}>{t("landingPage.nav.home")}</li>
          <li onClick={() => scrollTo("servicesSection")}>{t("landingPage.nav.services")}</li>
          <li onClick={() => scrollTo("aboutMeSection")}>{t("landingPage.nav.aboutMe")}</li>
          <li onClick={() => scrollTo("projectsSection")}>{t("landingPage.nav.projects")}</li>
        </ul>

        {/* contact button (desktop visible, mobile moved into overlay) */}
        <div className="nav-actions">
          <MainButton
            text={t("landingPage.nav.navContactMeButton")}
            bgColor="#2563EB"
            textColor="#FFFDFB"
            hoverBgColor="#FFC857"
            hoverBorderColor="transparent"
            height="80%"
            actionFunction={() => scrollTo("contactSection")}
          />
        </div>

        {/* hamburger button - visible only on mobile via CSS */}
        <button
          className={`nav-hamburger ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`nav-overlay ${open ? "visible" : ""}`} role="dialog" aria-modal="true">
        <div className="nav-overlay-inner">
          <img src={logoJI} alt="logo" className="overlay-logo" onClick={() => scrollTo("headerSection")} />
          <ul className="overlay-list">
            <li onClick={() => scrollTo("top")}>{t("landingPage.nav.home")}</li>
            <li onClick={() => scrollTo("servicesSection")}>{t("landingPage.nav.services")}</li>
            <li onClick={() => scrollTo("aboutMeSection")}>{t("landingPage.nav.aboutMe")}</li>
            <li onClick={() => scrollTo("projectsSection")}>{t("landingPage.nav.projects")}</li>
          </ul>

          <div className="overlay-cta">
            <MainButton
              text={t("landingPage.nav.navContactMeButton")}
              bgColor="#2563EB"
              textColor="#FFFDFB"
              hoverBgColor="#FFC857"
              hoverBorderColor="transparent"
              height="48px"
              actionFunction={() => scrollTo("contactSection")}
            />
          </div>

          <button className="overlay-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            {t("landingPage.nav.closeButton")}
          </button>
        </div>
      </div>
    </>
  );
};
