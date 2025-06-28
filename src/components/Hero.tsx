"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
    const { t } = useLanguage()

    const scrollToContact = () => {
        const element = document.getElementById("contact")
        element?.scrollIntoView({ behavior: "smooth" })
    }

    const handleDownloadCV = () => {
        const cvPath = t("hero.cvPath")
        const fileName = t("hero.downloadNameCV")

        const link = document.createElement("a")
        link.href = cvPath
        link.download = fileName
        link.target = "_blank"
        link.rel = "noopener noreferrer"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-primary-dark">
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Content Column */}
                    <div className="flex flex-col justify-center space-y-8">
                        {/* Main Title */}
                        <h1 className="text-display-xl font-tilt-neon text-primary-white leading-tight">{t("hero.title")}</h1>

                        {/* Name */}
                        <p className="text-display-lg font-coolvetica text-gradient leading-tight">Joel Andres Violante Madrid</p>

                        {/* Description */}
                        <p className="text-body font-roboto text-primary-white leading-relaxed max-w-2xl mt-8">
                            {t("hero.description")}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                className="bg-gradient-primary hover:opacity-90 text-primary-white font-roboto font-bold text-body px-10 py-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0"
                                onClick={handleDownloadCV}
                            >
                                <Download className="mr-3 h-5 w-5 text-primary-white" />
                                <span className="text-primary-white text-body">Descarga CV</span>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                onClick={scrollToContact}
                                className="border-2 border-gradient-from text-gradient hover:bg-gradient-primary hover:text-primary-white font-roboto font-bold text-body px-10 py-8 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                                style={{
                                    borderImage: "linear-gradient(135deg, #1A31FF 0%, #B651FF 100%) 1",
                                    border: ""
                                }}
                            >
                                <span className="text-body"
                                    style={{ color: "linear-gradient(135deg, #1A31FF 0%, #B651FF 100%) 1"

                                    }}
                                >Descarga CV</span>
                            </Button>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            <img
                                src="https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751042980/IMG_1670_1_gzxmoo.png"
                                alt="Joel Andres Violante Madrid"
                                className="w-full h-auto object-cover rounded-lg"
                                style={{ minHeight: "600px", objectFit: "cover" }}
                            />

                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent rounded-lg pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
