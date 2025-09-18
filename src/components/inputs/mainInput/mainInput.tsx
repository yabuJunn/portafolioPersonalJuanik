import { useEffect, useRef } from "react";
import type { ChangeEvent } from "react";
import "./mainInput.css";

type SelectOption = string | { value: string; label: string };

type MainInputProps = {
    label?: string;
    placeholder?: string;
    inputType?: "text" | "email" | "number" | "select" | "textarea" | "password" | "tel";
    selectOptions?: SelectOption[];
    stretch?: boolean;
    backgroundColor?: string;
    textColor?: string;
    labelColor?: string;
    placeholderColor?: string;
    className?: string;
    id?: string;
    value?: string;
    onChange?: (val: string) => void;
};

export const MainInput = ({
    label,
    placeholder = "",
    inputType = "text",
    selectOptions = [],
    stretch = false,
    backgroundColor = "#FFFFFF",
    textColor = "#111827",
    labelColor = "#111827",
    placeholderColor = "#9CA3AF",
    className = "",
    id,
    value,
    onChange,
}: MainInputProps) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null);

    // autoresize for textarea when stretch is true (use oninput to avoid typing issues)
    useEffect(() => {
        if (inputType !== "textarea" || !stretch) return;
        const ta = textareaRef.current;
        if (!ta) return;

        const resize = () => {
            ta.style.height = "auto";
            ta.style.height = `${ta.scrollHeight}px`;
        };

        // inicial
        resize();
        // asignamos oninput (evita problemas de typing con addEventListener)
        const prev = ta.oninput;
        ta.oninput = resize;

        return () => {
            ta.oninput = prev; // restauramos si existía algo antes
        };
    }, [inputType, stretch]);

    // sincronicemos la clase .has-value si se provee value desde afuera
    useEffect(() => {
        if (inputType === "select" && selectRef.current) {
            const has = !!(value && value !== "");
            selectRef.current.classList.toggle("has-value", has);
        }
    }, [inputType, value]);

    // input / textarea handler: usamos ChangeEvent y currentTarget para tipos seguros
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = e.currentTarget.value;
        onChange?.(val);
    };

    // select handler: usamos ChangeEvent<HTMLSelectElement> y currentTarget (seguro)
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const el = e.currentTarget;
        const val = el.value;
        // togglear clase con la referencia DOM del elemento del evento (seguro)
        el.classList.toggle("has-value", val !== "");
        onChange?.(val);
    };

    // style variables passed to CSS via inline style (CSS custom properties)
    const styleVars: React.CSSProperties = {
        ["--mi-bg" as any]: backgroundColor,
        ["--mi-text" as any]: textColor,
        ["--mi-label" as any]: labelColor,
        ["--mi-placeholder" as any]: placeholderColor,
    };

    return (
        <div className={`mainInput ${className}`} style={styleVars}>
            {label && (
                <label className="mainInput-label" htmlFor={id}>
                    {label}
                </label>
            )}

            {inputType === "select" ? (
                <select
                    id={id}
                    ref={selectRef}
                    className={`mainInput-field select`}
                    onChange={handleSelectChange}
                    value={value ?? ""}
                    title={placeholder}
                >
                    <option value="" disabled hidden>
                        {placeholder || "Select..."}
                    </option>

                    {selectOptions.map((opt, i) =>
                        typeof opt === "string" ? (
                            <option key={i} value={opt}>
                                {opt}
                            </option>
                        ) : (
                            <option key={i} value={opt.value}>
                                {opt.label}
                            </option>
                        )
                    )}
                </select>
            ) : inputType === "textarea" ? (
                <textarea
                    id={id}
                    ref={textareaRef}
                    className="mainInput-field mainInput-textarea"
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={value}
                    rows={1}
                    style={{ resize: stretch ? "none" : "vertical" }}
                />
            ) : (
                <input
                    id={id}
                    className="mainInput-field"
                    type={inputType}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={value}
                />
            )}
        </div>
    );
};
