"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center space-x-2">
            <Globe size={16} className="text-gray-600 dark:text-gray-400" />
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <Button
                    variant={language === "en" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 text-xs ${language === "en"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                        }`}
                >
                    EN
                </Button>
                <Button
                    variant={language === "es" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("es")}
                    className={`px-3 py-1 text-xs ${language === "es"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                        }`}
                >
                    ES
                </Button>
            </div>
        </div>
    )
}
