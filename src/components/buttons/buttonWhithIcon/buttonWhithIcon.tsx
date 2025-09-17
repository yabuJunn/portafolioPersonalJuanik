import "./buttonWhithIcon.css"

export const ButtonWithIcon = ({ text, icon }: { text: string, icon: string }) => {
    return <>
        <button className={"buttonWithIconContainer"}>
            <div className={"buttonWithIconText"}>{text}</div>
            <div className={"buttonWithIconImageContainer"}>
                <img src={icon} alt={text} className={"buttonWithIconImage"} />
            </div>
        </button>
    </>
}