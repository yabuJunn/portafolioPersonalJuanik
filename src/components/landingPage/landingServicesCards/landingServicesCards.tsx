import "./landingServicesCards.css"

import arrowRigthBlue from "../../../assets/svg/landingPage/arrowRightBlue.svg"

type LandingServicesCardsProps = {
    cardTitle: string;
    cardDescription: string;
    cardIcon: string;
}

export const LandingServicesCards = ({ cardTitle, cardDescription, cardIcon }: LandingServicesCardsProps) => {
    return <>
        <div className={"landingPage-services-content-cards-container"}>
            <div className={"landingPage-services-content-cards-container-icon"}>
                <img src={cardIcon} alt={cardIcon} />
            </div>

            <h4>{cardTitle}</h4>
            <p>{cardDescription}</p>

            <div className={"landingPage-services-content-cards-container-learn-more"}>
                <p>Learn more</p>
                <img src={arrowRigthBlue} alt={arrowRigthBlue} />
            </div>
        </div>
    </>
}