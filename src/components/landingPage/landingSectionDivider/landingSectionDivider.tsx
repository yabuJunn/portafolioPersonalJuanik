import "./landingSectionDivider.css";

export const LandingSectionDivider = () => {
    return (
        <div className="landingPage-sectionDivider" role="separator" aria-hidden="true">
            <div className="landingPage-sectionDivider-line" />
            <div className="landingPage-sectionDivider-lineTransform" />
            <div className="landingPage-sectionDivider-lineTransform2" />
        </div>
    );
};
