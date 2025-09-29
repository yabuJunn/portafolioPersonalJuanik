import "./landingProjectCard.css";

type LandingProjectsCardsProps = {
  cardTitle: string;
  cardSubtitle: string;
  cardDescription: string;
  cardImage: string;
  cardProjectLink: string;
};

export const LandingProjectCard = ({ cardTitle, cardSubtitle, cardDescription, cardImage, cardProjectLink }: LandingProjectsCardsProps) => {
  const id = `proj-${cardTitle.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className="landingPage-project-card" aria-labelledby={id}>
      <div className="landingPage-project-card-image" role="img" aria-label={cardTitle}>
        <img src={cardImage} alt={cardTitle} />
      </div>

      <div className="landingPage-project-card-titles">
        <h4 id={id} className="landingPage-project-card-title">{cardTitle}</h4>
        <p className="landingPage-project-card-subtitle">{cardSubtitle}</p>
      </div>

      <p className="landingPage-project-card-description">{cardDescription}</p>

      <a
        href={cardProjectLink}
        className="landingPage-project-card-cta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Learn more about ${cardTitle}`}
      >
        <span>Learn more</span>
        <img src="../../../assets/svg/landingPage/arrowRightBlue.svg" alt="" aria-hidden="true" />
      </a>
    </article>
  );
};
