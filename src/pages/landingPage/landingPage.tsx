import "./landingPage.css"

import { LandingPageNavigation } from "../../components/navigation/landingPageNavigation/landingPageNavigation"

export const LandingPage = () => {
    return <>
        <main className={"page landingPage"}>
            
            <div className={"landingPage-container"}>
                <LandingPageNavigation></LandingPageNavigation>
                <section className={"landingPage-section landingPage-header"}>

                </section>
            </div>

        </main>
    </>
}