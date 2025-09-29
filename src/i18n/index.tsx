import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// type for translations object (lo mínimo, puede ser any)
type Translations = Record<string, any>;
type Lang = "en" | "es";

const DEFAULT_LANG: Lang = (navigator.language?.startsWith("es") ? "es" : "en") as Lang;
const STORAGE_KEY = "juanik_lang";

// helper to flatten path access: "site.title" -> value
const getByPath = (obj: any, path: string) => {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

// load translations synchronously for now (small app). Optional: lazy load with dynamic import.
import en from "./translations/en.json";
import es from "./translations/es.json";

const ALL_TRANSLATIONS: Record<Lang, Translations> = { en, es };

type I18nContextValue = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (path: string, vars?: Record<string, string | number>) => string;
    available: Lang[];
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Lang>(() => {
        const saved = (localStorage.getItem(STORAGE_KEY) as Lang | null) ?? null;
        return (saved ?? DEFAULT_LANG) as Lang;
    });

    // persist and set html[lang]
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, lang);
        try {
            document.documentElement.lang = lang;
        } catch (e) {
            /* ignore */
        }
    }, [lang]);

    const setLang = (l: Lang) => setLangState(l);

    const t = (path: string, vars?: Record<string, string | number>) => {
        const translations = ALL_TRANSLATIONS[lang] ?? {};
        let val = getByPath(translations, path);
        if (val === undefined) {
            // fallback to english if missing
            val = getByPath(ALL_TRANSLATIONS["en"], path) ?? path;
        }
        if (typeof val !== "string") return String(val);
        if (!vars) return val;
        // simple interpolation: replace {name} with vars.name
        return Object.keys(vars).reduce((s, k) => s.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k])), val);
    };

    const value = useMemo(() => ({ lang, setLang, t, available: Object.keys(ALL_TRANSLATIONS) as Lang[] }), [lang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
    return ctx;
};
