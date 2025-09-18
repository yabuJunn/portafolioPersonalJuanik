import "./landingPage.css"

import { LandingPageNavigation } from "../../components/navigation/landingPageNavigation/landingPageNavigation"
import { LandingHeaderSectionContent } from "../../components/landingPage/landingHeaderSection/landingHeaderSection"
import { LandingSectionDivider } from "../../components/landingPage/landingSectionDivider/landingSectionDivider"
import { LandingServicesSection } from "../../components/landingPage/landingServicesSection/landingServicesSection"
import { LandingAboutMeSection } from "../../components/landingPage/landingAboutMeSection/landingAboutMeSection"
import { LandingProjectsSection } from "../../components/landingPage/landingProjectsSection/landingProjectsSection"

export const LandingPage = () => {
    return <>
        <main className={"page landingPage"}>

            <div className={"landingPage-container"}>
                <LandingPageNavigation></LandingPageNavigation>
                <section className={"landingPage-section landingPage-header"}>
                    <LandingHeaderSectionContent></LandingHeaderSectionContent>
                </section>
                <LandingSectionDivider></LandingSectionDivider>
                <LandingServicesSection></LandingServicesSection>
                <LandingAboutMeSection></LandingAboutMeSection>
                <LandingProjectsSection></LandingProjectsSection>
            </div>

        </main >
    </>
}