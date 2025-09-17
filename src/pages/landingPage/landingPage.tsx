import "./landingPage.css"

import { LandingPageNavigation } from "../../components/navigation/landingPageNavigation/landingPageNavigation"
import { LandingHeaderSectionContent } from "../../components/landingPage/landingHeaderSection/landingHeaderSection"
import { LandingSectionDivider } from "../../components/landingPage/landingSectionDivider/landingSectionDivider"

export const LandingPage = () => {
    return <>
        <main className={"page landingPage"}>

            <div className={"landingPage-container"}>
                <LandingPageNavigation></LandingPageNavigation>
                <section className={"landingPage-section landingPage-header"}>
                    <LandingHeaderSectionContent></LandingHeaderSectionContent>
                </section>
                <LandingSectionDivider></LandingSectionDivider>
            </div>

        </main >
    </>
}