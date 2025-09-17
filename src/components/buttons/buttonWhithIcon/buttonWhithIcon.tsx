import { useState } from "react";

import "./buttonWhithIcon.css";

type ButtonWithIconProps = {
    text: string;
    icon: string;
    bgColor?: string;               // color del fondo del botón
    textColor?: string;             // color del texto
    textBgColor?: string;           // color del contenedor de texto
    circleBgColor?: string;         // color del círculo derecho
    hoverBgColor?: string;          // color de fondo al hover
    hoverTextColor?: string;        // color de texto al hover
    hoverTextBgColor?: string;      // color de contenedor de texto al hover
    hoverCircleBgColor?: string;    // color del círculo derecho al hover
    actionFunction: () => void; // función de acción al hacer click
};

export const ButtonWithIcon = ({
    text,
    icon,
    bgColor = "#FF6F3C",
    textColor = "#FFFDFB",
    textBgColor = "#2563EB",
    circleBgColor = "#FFFDFB",
    hoverBgColor = "#e65a2c",
    hoverTextColor = "#FFD700",
    hoverTextBgColor = "#1746A2",
    hoverCircleBgColor = "#F5F5F5",
    actionFunction = () => { console.log("Button with icon clicked") }
}: ButtonWithIconProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button onClick={() => { actionFunction() }}
            className="buttonWithIconContainer"
            style={{
                backgroundColor: isHovered ? hoverBgColor : bgColor,
                transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="buttonWithIconText"
                style={{
                    backgroundColor: isHovered ? hoverTextBgColor : textBgColor,
                    color: isHovered ? hoverTextColor : textColor,
                    transition: "all 0.3s ease",
                }}
            >
                {text}
            </div>
            <div
                className="buttonWithIconImageContainer"
                style={{
                    backgroundColor: isHovered ? hoverCircleBgColor : circleBgColor,
                    transition: "all 0.3s ease",
                }}
            >
                <img src={icon} alt={text} className="buttonWithIconImage" />
            </div>
        </button>
    );
};
