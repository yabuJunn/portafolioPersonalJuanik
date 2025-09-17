import "./landingHeaderSection.css"

import landingPageHeaderImage from "../../../assets/png/landingPage/landingPageHeaderPhoto.png"
import whiteCircleRightArrrow from "../../../assets/svg/landingPage/whiteCircleArrowRigth.svg"

export const LandingHeaderSectionContent = () => {
    return <>
        <div className={"landingPage-header-content-text"}>
            <h1>Hello I’m <span>Juanik</span>,<br></br> Interactive Media Designer & Music Producer</h1>
            <p>I’m an Interactive Media Designer and Musician, focused on creating immersive user experiences that merge art, technology, and sound. I combine UX/UI design, creative coding, and music production to develop innovative projects that inspire and generate real impact.</p>

            <div className={"landingPage-header-content-text-buttons"}>
                <div className={"landingPage-header-content-text-buttons-left"}>
                    <button>View my portfolio</button>
                    <img src={whiteCircleRightArrrow} alt="Arrow pointing right" />
                </div>

                <button className={"landingPage-header-content-text-buttons-right"}>
                    Hire me
                </button>
            </div>
        </div>

        <div class={"landingPage-header-content-image"}>
            <img src={landingPageHeaderImage} alt="Landing Page Header Juanik Photo" />
        </div>
    </>
}