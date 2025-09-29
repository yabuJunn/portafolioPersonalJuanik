import "./landingHeaderSection.css"

import { useI18n } from "../../../i18n"

import { ButtonWithIcon } from "../../buttons/buttonWhithIcon/buttonWhithIcon"
import { MainButton } from "../../buttons/mainButton/mainButton"

import landingPageHeaderImage from "../../../assets/webp/landingPageHeaderPhoto.webp"
import arrowRigthDark from "../../../assets/svg/landingPage/arrowRightDark.svg"

export const LandingHeaderSectionContent = () => {
    const { t } = useI18n()
    return <>
        <div className={"landingPage-header-content-text"} id={"headerSection"}>
            <h1 dangerouslySetInnerHTML={{ __html: t("landingPage.header.title", { name: "Juanik" }) }}></h1>
            <p>{t("landingPage.header.subtitle")}</p>

            <div className={"landingPage-header-content-text-buttons"}>
                <ButtonWithIcon text={t("landingPage.header.portfolioButton")} icon={arrowRigthDark} bgColor="#FF6F3C" hoverTextColor="#FFFDFB" actionFunction={() => { console.log("View my portfolio clicked") }} />

                <MainButton text={t("landingPage.header.hireButton")} actionFunction={() => {
                    const section = document.getElementById("contactSection");
                    section?.scrollIntoView({ behavior: "smooth" });
                }} />
            </div>
        </div>

        <div className={"landingPage-header-content-image"}>
            <img src={landingPageHeaderImage} alt="Landing Page Header Juanik Photo" />
        </div>
    </>
}