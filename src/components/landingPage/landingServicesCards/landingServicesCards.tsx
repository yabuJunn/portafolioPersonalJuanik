import "./landingServicesCards.css";

import arrowRigthBlue from "../../../assets/svg/landingPage/arrowRightBlue.svg";

type LandingServicesCardsProps = {
    cardTitle: string;
    cardDescription: string;
    cardIcon: string;
};

export const LandingServicesCards = ({ cardTitle, cardDescription, cardIcon }: LandingServicesCardsProps) => {
    return (
        <article className="landing-services-card" aria-labelledby={`srv-${cardTitle.replace(/\s+/g, "-").toLowerCase()}`}>
            <div className="landing-services-card-top">
                <div className="landing-services-card-icon" aria-hidden="true">
                    <img src={cardIcon} alt={cardTitle + " icon"} />
                </div>

                <h4 id={`srv-${cardTitle.replace(/\s+/g, "-").toLowerCase()}`} className="landing-services-card-title">
                    {cardTitle}
                </h4>
            </div>

            <p className="landing-services-card-desc">{cardDescription}</p>

            <div
                className="landing-services-card-cta"
                role="button"
                tabIndex={0}
                onClick={() => {
                    /* placeholder action — replace with navigation or modal if needed */
                    console.log("Learn more clicked:", cardTitle);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        console.log("Learn more (key) clicked:", cardTitle);
                    }
                }}
                aria-label={`Learn more about ${cardTitle}`}
            >
                <span>Learn more</span>
                <img src={arrowRigthBlue} alt="" aria-hidden="true" />
            </div>
        </article>
    );
};
