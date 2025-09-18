import "./landingProjectCard.css"

import arrowRigthBlue from "../../../assets/svg/landingPage/arrowRightBlue.svg"

type LandingProjectsCardsProps = {
    cardTitle: string;
    cardSubtitle: string;
    cardDescription: string;
    cardImage: string;
}

export const LandingProjectCard = ({ cardTitle, cardSubtitle, cardDescription, cardImage }: LandingProjectsCardsProps) => {
    return <>
        <div className={"landingPage-project-content-card-container"}>
            <div className={"landingPage-project-content-card-image"}>
                <img src={cardImage} alt={cardImage} />
            </div>

            <div className={"landingPage-project-content-cards-container-titles"}>
                <h4>{cardTitle}</h4>
                <p>{cardSubtitle}</p>
            </div>

            <p className={"landingPage-project-content-card-description"}>{cardDescription}</p>

            <div className={"landingPage-project-content-cards-container-learn-more"}>
                <p>Learn more</p>
                <img src={arrowRigthBlue} alt={arrowRigthBlue} />
            </div>
        </div>
    </>
}