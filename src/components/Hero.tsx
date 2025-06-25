"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
    const { t } = useLanguage()

    const scrollToAbout = () => {
        const element = document.getElementById("about")
        element?.scrollIntoView({ behavior: "smooth" })
    }

    const handleDownloadCV = () => {
        const cvPath = t("hero.cvPath")
        const fileName = t("hero.downloadNameCV")

        // Crear un enlace temporal para la descarga
        const link = document.createElement("a")
        link.href = cvPath
        link.download = fileName
        link.target = "_blank"
        link.rel = "noopener noreferrer"

        // Agregar al DOM, hacer clic y remover
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            {t("hero.greeting")} <span className="text-blue-600 dark:text-blue-400">Joel A. Violante Madrid</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">{t("hero.title")}</p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">{t("hero.description")}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleDownloadCV}>
                                <Download className="mr-2 h-4 w-4" />
                                {t("hero.downloadCV")}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={scrollToAbout}
                                className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                            >
                                {t("hero.learnMore")}
                                <ArrowDown className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{t("hero.location")}</p>
                    </div>
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                                <img
                                    src="/images/personal.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback si la imagen no carga
                                        const target = e.target as HTMLImageElement
                                        target.src =
                                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=320&fit=crop&crop=face"
                                    }}
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl">👋</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
