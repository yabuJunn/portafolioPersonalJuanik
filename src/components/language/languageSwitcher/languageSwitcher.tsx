import React from "react";
import { useI18n } from "../../../i18n";

export const LanguageSwitcher: React.FC = () => {
    const { lang, setLang } = useI18n();

    return (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                style={{
                    background: lang === "en" ? "#2563EB" : "transparent",
                    color: lang === "en" ? "#fff" : "#111",
                    padding: "6px 10px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                }}
            >
                EN
            </button>
            <button
                onClick={() => setLang("es")}
                aria-pressed={lang === "es"}
                style={{
                    background: lang === "es" ? "#2563EB" : "transparent",
                    color: lang === "es" ? "#fff" : "#111",
                    padding: "6px 10px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                }}
            >
                ES
            </button>
        </div>
    );
};
