import { useState } from "react";
import "./mainButton.css";

type MainButtonProps = {
  text: string;
  bgColor?: string; // color de fondo
  textColor?: string; // color del texto
  border?: boolean; // si tiene borde o no
  borderColor?: string; // color del borde
  hoverBgColor?: string; // color de fondo al hover
  hoverTextColor?: string; // color de texto al hover
  hoverBorderColor?: string; // color del borde al hover
  height?: string; // altura del botón (por ejemplo "48px" o "100%")
  ariaLabel?: string;
  actionFunction?: () => void; // función de acción al hacer click
};

export const MainButton = ({
  text,
  bgColor = "transparent",
  textColor = "#2563EB",
  border = true,
  borderColor = "#2563EB",
  hoverBgColor = "#2563EB",
  hoverTextColor = "#FFFDFB",
  hoverBorderColor = "#2563EB",
  height,
  ariaLabel,
  actionFunction = () => {
    console.log("Button clicked");
  },
}: MainButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      actionFunction();
    }
  };

  // touch behavior: set hovered state briefly on touchstart so user sees feedback
  const handleTouchStart = () => {
    setIsHovered(true);
  };
  const handleTouchEnd = () => {
    // keep the visual feedback a bit then remove
    setTimeout(() => setIsHovered(false), 150);
  };

  const computedStyle: React.CSSProperties = {
    backgroundColor: isHovered ? hoverBgColor : bgColor,
    color: isHovered ? hoverTextColor : textColor,
    border: border ? `0.1rem solid ${isHovered ? hoverBorderColor : borderColor}` : "none",
    height: height ?? undefined, // if undefined, allow CSS / parent to control height
    minHeight: height ? undefined : "44px", // touch-friendly minimum if not explicitly set
  };

  return (
    <button
      type="button"
      className="mainButton"
      aria-label={ariaLabel ?? text}
      onClick={actionFunction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKey}
      style={computedStyle}
    >
      {text}
    </button>
  );
};
