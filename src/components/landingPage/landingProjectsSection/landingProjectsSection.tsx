import "./landingProjectsSection.css";

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon";
import { LandingTitleText } from "../landingTitleText/landingTitleText";
import { LandingProjectCard } from "../landingProjectCard/landingProjectCard";
import { useI18n } from "../../../i18n";

import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg";
import projectImage1 from "../../../assets/webp/projectJaramilloMora.webp";
import projectImage2 from "../../../assets/webp/projectLudos.webp";
import projectImage3 from "../../../assets/webp/projectCapy.webp";

export const LandingProjectsSection = () => {
  const { t } = useI18n();

  return (
    <section className="landingPage-section landingPage-projects" id="projectsSection" aria-labelledby="projects-title">
      <div className="landingPage-projects-inner">
        <h3 id="projects-title" className="landingPage-projects-small-title">{t("landingPage.projects.sectionTitle")}</h3>

        <div className="landingPage-projects-header">
          <LandingTitleText
            highlightText={t("landingPage.projects.sectionTitle")}
            titleText={t("landingPage.projects.title")}
          />
          <div className="projects-header-action">
            <ButtonWithIcon
              text={t("landingPage.projects.viewAllButton")}
              icon={arrowRigthDark}
              bgColor="#FF6F3C"
              hoverTextColor="#FFFDFB"
              actionFunction={() => { console.log("View all projects clicked"); }}
            />
          </div>
        </div>

        <div className="landingPage-projects-cards-grid">
          <LandingProjectCard
            cardTitle={t("landingPage.projects.cards.project1.title")}
            cardSubtitle={t("landingPage.projects.cards.project1.subtitle")}
            cardDescription={t("landingPage.projects.cards.project1.description")}
            cardImage={projectImage1}
            cardProjectLink="https://www.behance.net/gallery/227819111/Tu-camino-a-casa-UXUI-Design"
          />
          <LandingProjectCard
            cardTitle={t("landingPage.projects.cards.project2.title")}
            cardSubtitle={t("landingPage.projects.cards.project2.subtitle")}
            cardDescription={t("landingPage.projects.cards.project2.description")}
            cardImage={projectImage2}
            cardProjectLink="https://www.instagram.com/p/DKqQeE8N1hP/?utm_source=ig_web_copy_link&igsh=ZTV1MWE3eG90Z2I5"
          />
          <LandingProjectCard
            cardTitle={t("landingPage.projects.cards.project3.title")}
            cardSubtitle={t("landingPage.projects.cards.project3.subtitle")}
            cardDescription={t("landingPage.projects.cards.project3.description")}
            cardImage={projectImage3}
            cardProjectLink="https://www.behance.net/gallery/213734287/CAPY-WEB"
          />
        </div>
      </div>
    </section>
  );
};
