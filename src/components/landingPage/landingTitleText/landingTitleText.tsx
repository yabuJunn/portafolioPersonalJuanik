import "./landingTitleText.css"

type LandingTitleTextProps = {
    titleText: string;
    highlightText: string;
}

export const LandingTitleText = ({ titleText, highlightText }: LandingTitleTextProps) => {
    return <>
        <h2 className={"landingTitleText"}><span>{highlightText}</span> {titleText}</h2>
    </>
}