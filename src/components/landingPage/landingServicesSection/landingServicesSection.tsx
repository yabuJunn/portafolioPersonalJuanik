import "./landingServicesSection.css";

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon";
import { LandingTitleText } from "../landingTitleText/landingTitleText";
import { LandingServicesCards } from "../landingServicesCards/landingServicesCards";
import { useI18n } from "../../../i18n";

import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg";
import desktopIconBlue from "../../../assets/svg/icons/desktopIconBlue.svg";
import musicIconBlue from "../../../assets/svg/icons/musicIconBlue.svg";
import personIconBlue from "../../../assets/svg/icons/personIconBlue.svg";

export const LandingServicesSection = () => {
  const { t } = useI18n();

  return (
    <section
      className={"landingPage-section landingPage-services"}
      id={"servicesSection"}
      aria-labelledby="services-title"
    >
      <div className={"landingPage-services-content-text-header-container"}>
        <h3 id="services-title" className={"landingPage-services-content-text-header-title"}>
          {t("landingPage.services.sectionTitle")}
        </h3>

        <div className={"landingPage-services-content-text-header"}>
          <LandingTitleText
            highlightText={t("landingPage.services.highlightText")}
            titleText={t("landingPage.services.titleText")}
          />

          <div className="services-header-action">
            <ButtonWithIcon
              text={t("landingPage.services.actionButton")}
              icon={arrowRigthDark}
              bgColor="#FF6F3C"
              hoverTextColor="#FFFDFB"
              actionFunction={() => {
                console.log("View my portfolio clicked");
              }}
            />
          </div>
        </div>

        <div className={"landingPage-services-cards-container"}>
          <LandingServicesCards
            cardTitle={t("landingPage.services.cards.uxui.title")}
            cardDescription={t("landingPage.services.cards.uxui.description")}
            cardIcon={personIconBlue}
          />
          <LandingServicesCards
            cardTitle={t("landingPage.services.cards.interactive.title")}
            cardDescription={t("landingPage.services.cards.interactive.description")}
            cardIcon={desktopIconBlue}
          />
          <LandingServicesCards
            cardTitle={t("landingPage.services.cards.music.title")}
            cardDescription={t("landingPage.services.cards.music.description")}
            cardIcon={musicIconBlue}
          />
        </div>
      </div>
    </section>
  );
};
