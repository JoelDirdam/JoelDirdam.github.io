"use client"

import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageSwitch() {
    const { language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "es" : "en")
    }

    return (
        <div className="relative">
            {/* Switch Container */}
            <button
                onClick={toggleLanguage}
                className={`
                    relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 ease-in-out
                    ${language === "es" ? "bg-gradient-primary" : "bg-gradient-primary-mirroring"}
                `}
                role="switch"
                aria-checked={language === "es"}
                aria-label="Toggle language"
            >
                {/* Switch Thumb */}
                <span
                    className={`
                        inline-block h-6 w-6 transform rounded-full bg-primary-white shadow-lg transition-transform duration-300 ease-in-out
                        ${language === "es" ? "translate-x-9" : "translate-x-1"}
                    `}
                />

                {/* Labels */}
                <span
                    className={`
                        absolute left-3 text-xs font-tilt-neon font-bold transition-opacity duration-300
                        ${language === "en" ? "text-primary-white opacity-100" : "text-primary-white/60 opacity-60"}
                    `}
                >
                    EN
                </span>
                <span
                    className={`
                        absolute right-[14px] text-xs font-tilt-neon font-bold transition-opacity duration-300
                        ${language === "es" ? "text-primary-white opacity-100" : "text-primary-white/60 opacity-60"}
                    `}
                >
                    ES
                </span>
            </button>
        </div>
    )
}
