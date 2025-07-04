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

    const techLogos = [
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346801/logo_php_vtqims.svg",
            alt: "PHP",
            position: "top-8 -left-14 lg:-left-20",
            size: "w-24 h-24 lg:w-32 lg:h-32",
            animation: "animate-float-1",
        },
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346800/logo_flutter_mtsneb.svg",
            alt: "Flutter",
            position: "top-20 left-0 lg:top-24",
            size: "w-28 h-28 lg:w-32 lg:h-32",
            animation: "animate-float-2",
        },
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346799/logo_python_adkkcz.svg",
            alt: "Python",
            position: "top-32 -left-12 lg:top-44",
            size: "w-24 h-24 lg:w-26 lg:h-26",
            animation: "animate-float-3",
        },
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346802/logo_react_fc3bhq.svg",
            alt: "React",
            position: "top-1/2 -right-10 lg:-right-12",
            size: "w-24 h-24 lg:w-26 lg:h-26",
            animation: "animate-float-4",
        },
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346800/logo_html5_tckxxg.svg",
            alt: "HTML5",
            position: "top-1/2 right-8 lg:right-12",
            size: "w-28 h-28 lg:w-36 lg:h-36",
            animation: "animate-float-5",
        },
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346799/logo_js_li8tpd.svg",
            alt: "JavaScript",
            position: "top-2/3 right-8 lg:-right-2",
            size: "w-20 h-20 lg:w-36 lg:h-32",
            animation: "animate-float-6",
        },
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346800/logo_bootstrap_u9tomb.svg",
            alt: "Bootstrap",
            position: "bottom-14 left-4 lg:-left-12",
            size: "w-24 h-24 lg:w-36 lg:h-32",
            animation: "animate-float-7",
        },
        {
            src: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751346801/logo_tailwindcss_mycn2w.svg",
            alt: "Tailwind CSS",
            position: "bottom-2 left-8 lg:-left-4",
            size: "w-24 h-24 lg:w-36 lg:h-32",
            animation: "animate-float-7",
        },
    ]

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
                                <span className="text-primary-white text-body">{t("hero.btn_cv")}</span>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                onClick={scrollToContact}
                                className="border-2 border-gradient-from text-gradient font-roboto font-bold text-body px-10 py-8 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                                style={{
                                    borderImage: "linear-gradient(135deg, #1A31FF 0%, #B651FF 100%) 1",
                                    border: ""
                                }}
                            >
                                <span
                                    className="text-body"
                                    style={{
                                        background: "linear-gradient(135deg, #1A31FF 0%, #B651FF 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        display: "inline-block"
                                    }}
                                >
                                    {t("hero.btn_contact")}
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            <img
                                src="https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751042980/IMG_1670_1_gzxmoo.png"
                                alt="Joel Andres Violante Madrid"
                                className="w-full h-auto object-cover rounded-lg relative z-10"
                                style={{ minHeight: "600px", objectFit: "cover" }}
                            />

                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent rounded-lg pointer-events-none z-20"></div>

                            {/* Tech Logos */}
                            {techLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${logo.position} ${logo.animation} z-30`}
                                    style={{
                                        animationDelay: `${index * 0.5}s`,
                                    }}
                                >
                                    <div
                                        className={`${logo.size} rounded-full bg-transparent flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group`}
                                    >
                                        <img
                                            src={logo.src || "/placeholder.svg"}
                                            alt={logo.alt}
                                            className="w-full h-full object-contain group-hover:brightness-110 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Floating particles */}
                            <div className="absolute inset-0 pointer-events-none z-5">
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-primary rounded-full animate-ping opacity-60"></div>
                                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gradient-primary rounded-full animate-pulse opacity-40"></div>
                                <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-gradient-primary rounded-full animate-bounce opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
