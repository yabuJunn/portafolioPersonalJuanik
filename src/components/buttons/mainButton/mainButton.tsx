import { useState } from "react";
import "./mainButton.css";

type MainButtonProps = {
    text: string;
    bgColor?: string;       // color de fondo
    textColor?: string;     // color del texto
    border?: boolean;       // si tiene borde o no
    borderColor?: string;   // color del borde
    hoverBgColor?: string;  // color de fondo al hover
    hoverTextColor?: string;// color de texto al hover
    hoverBorderColor?: string; // color del borde al hover
    height?: string;      // altura del botón
    actionFunction: () => void; // función de acción al hacer click
};

export const MainButton = ({
    text,
    bgColor = "transparent",
    textColor = "#2563EB",
    border = true,
    borderColor = "#2563EB",
    hoverBgColor = "#2563EB",
    hoverTextColor = "#FFFDFB",
    height = "100%",
    hoverBorderColor = "#2563EB",

    actionFunction = () => { console.log("Button clicked") }
}: MainButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button onClick={() => { actionFunction() }}
            className="mainButton"
            style={{
                backgroundColor: isHovered ? hoverBgColor : bgColor,
                color: isHovered ? hoverTextColor : textColor,
                border: border
                    ? `0.1rem solid ${isHovered ? hoverBorderColor : borderColor}`
                    : "none",
                transition: "all 0.3s ease-in-out",
                height: height,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </button>
    );
};
