import "./landingTitleText.css";

type LandingTitleTextProps = {
    titleText: string;
    highlightText: string;
};

export const LandingTitleText = ({ titleText, highlightText }: LandingTitleTextProps) => {
    return (
        <h2 className="landingTitleText" aria-label={`${highlightText} ${titleText}`}>
            <span>{highlightText}</span> {titleText}
        </h2>
    );
};
