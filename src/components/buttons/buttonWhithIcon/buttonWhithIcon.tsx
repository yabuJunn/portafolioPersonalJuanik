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
    ariaLabel?: string;
    actionFunction?: () => void; // función de acción al hacer click
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
    ariaLabel,
    actionFunction = () => {
        console.log("Button with icon clicked");
    },
}: ButtonWithIconProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            actionFunction();
        }
    };

    return (
        <button
            type="button"
            className="buttonWithIconContainer"
            aria-label={ariaLabel ?? text}
            onClick={() => actionFunction()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            onKeyDown={handleKey}
            style={{
                backgroundColor: isHovered ? hoverBgColor : bgColor,
            }}
        >
            <div
                className="buttonWithIconText"
                style={{
                    backgroundColor: isHovered ? hoverTextBgColor : textBgColor,
                    color: isHovered ? hoverTextColor : textColor,
                }}
            >
                {text}
            </div>

            <div
                className="buttonWithIconImageContainer"
                style={{
                    backgroundColor: isHovered ? hoverCircleBgColor : circleBgColor,
                }}
            >
                <img src={icon} alt={text} className="buttonWithIconImage" />
            </div>
        </button>
    );
};
