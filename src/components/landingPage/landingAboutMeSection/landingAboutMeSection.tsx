import "./landingAboutMeSection.css"

import aboutMeJuanikPhoto from "../../../assets/webp/aboutMeJuanikPhoto.webp"
import aboutMeGraphicStrips from "../../../assets/svg/landingPage/aboutMeGraphicStrips.svg"
import aboutMeStarsIcon from "../../../assets/svg/landingPage/aboutMeStarsIcon.svg"

export const LandingAboutMeSection = () => {
    return <>
        <section className={"landingPage-section landingPage-aboutMe"} id={"aboutMeSection"}>
            <div className={"landingPage-aboutMe-content-image-container"}>
                <div className={"landingPage-aboutMe-content-image"}>
                    <img src={aboutMeJuanikPhoto} alt={aboutMeJuanikPhoto} />
                </div>
                <img src={aboutMeStarsIcon} alt={aboutMeStarsIcon} className={"landingPage-aboutMe-content-image-stars-icon"} />
            </div>

            <div className={"landingPage-aboutMe-content-text-container"}>
                <h3 className={"landingPage-aboutMe-content-text-subtitle"}>About Me</h3>
                <h2 className={"landingPage-aboutMe-content-text-title"}>Who is <span>Juanik?</span></h2>
                <p>I’m a multidisciplinary creator with a background in Interactive Media Design and Music, passionate about blending art, technology, and sound to craft meaningful digital experiences. My work spans UX/UI design, interactive prototyping, audiovisual production, and music composition, always focused on creating immersive and engaging solutions. With experience in both academic and creative projects, I bring together technical expertise and artistic vision to design interactive spaces, digital products, and sonic identities that inspire and connect people.</p>
                <img src={aboutMeGraphicStrips} alt={aboutMeGraphicStrips} />
            </div>

            <iframe
                className="landingPage-aboutMe-video"
                src="https://www.youtube.com/embed/ew9it84yxzU?si=3dJ8Yej9Usnduy3k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>


        </section>
    </>
}