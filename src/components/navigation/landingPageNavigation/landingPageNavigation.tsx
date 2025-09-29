import { useEffect, useState } from "react";
import "./landingPageNavigation.css";

import { MainButton } from "../../buttons/mainButton/mainButton";
import logoJI from "../../../assets/svg/logoJI.svg";

export const LandingPageNavigation = () => {
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
          onClick={() => scrollTo("headerSection")}
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? scrollTo("headerSection") : null)}
        />

        {/* desktop / tablet menu */}
        <ul className="nav-list">
          <li onClick={() => scrollTo("headerSection")}>Home</li>
          <li onClick={() => scrollTo("servicesSection")}>Services</li>
          <li onClick={() => scrollTo("aboutMeSection")}>About Me</li>
          <li onClick={() => scrollTo("projectsSection")}>Projects</li>
        </ul>

        {/* contact button (desktop visible, mobile moved into overlay) */}
        <div className="nav-actions">
          <MainButton
            text="Contact Me"
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
            <li onClick={() => scrollTo("headerSection")}>Home</li>
            <li onClick={() => scrollTo("servicesSection")}>Services</li>
            <li onClick={() => scrollTo("aboutMeSection")}>About Me</li>
            <li onClick={() => scrollTo("projectsSection")}>Projects</li>
          </ul>

          <div className="overlay-cta">
            <MainButton
              text="Contact Me"
              bgColor="#2563EB"
              textColor="#FFFDFB"
              hoverBgColor="#FFC857"
              hoverBorderColor="transparent"
              height="48px"
              actionFunction={() => scrollTo("contactSection")}
            />
          </div>

          <button className="overlay-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};
