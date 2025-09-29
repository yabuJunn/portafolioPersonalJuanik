import "./landingAboutMeSection.css";

import { useI18n } from "../../../i18n";

import aboutMeJuanikPhoto from "../../../assets/webp/aboutMeJuanikPhoto.webp";
import aboutMeGraphicStrips from "../../../assets/svg/landingPage/aboutMeGraphicStrips.svg";
import aboutMeStarsIcon from "../../../assets/svg/landingPage/aboutMeStarsIcon.svg";

export const LandingAboutMeSection = () => {
    const { t } = useI18n();

    return (
        <section
            className="landingPage-section landingPage-aboutMe"
            id="aboutMeSection"
            aria-labelledby="aboutme-title"
        >
            <div className="landingPage-aboutMe-inner">
                <div className="landingPage-aboutMe-content-image-container">
                    <div className="landingPage-aboutMe-content-image" aria-hidden="true">
                        <img src={aboutMeJuanikPhoto} alt={t("landingPage.about.imageAlt")} />
                    </div>
                    <img
                        src={aboutMeStarsIcon}
                        alt={t("landingPage.about.graphicAlt")}
                        aria-hidden="true"
                        className="landingPage-aboutMe-content-image-stars-icon"
                    />
                </div>

                <div className="landingPage-aboutMe-content-text-container">
                    <h3 id="aboutme-title" className="landingPage-aboutMe-content-text-subtitle">
                        {t("landingPage.about.subtitle")}
                    </h3>
                    <h2 className="landingPage-aboutMe-content-text-title"
                        dangerouslySetInnerHTML={{ __html: t("landingPage.about.title", { name: "Juanik" }) }}
                    />

                    <p>{t("landingPage.about.paragraph")}</p>

                    <img
                        src={aboutMeGraphicStrips}
                        alt={t("landingPage.about.graphicAlt")}
                        className="landingPage-aboutMe-content-graphic"
                        aria-hidden="true"
                    />
                </div>

                <div className="landingPage-aboutMe-video-wrapper">
                    <iframe
                        className="landingPage-aboutMe-video"
                        src="https://www.youtube.com/embed/ew9it84yxzU?si=3dJ8Yej9Usnduy3k"
                        title={t("landingPage.about.videoTitle")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};
