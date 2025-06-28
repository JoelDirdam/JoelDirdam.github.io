"use client"

import { useState } from "react"
import { Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import LanguageSwitch from "./LanguageSwitch"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t } = useLanguage()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 w-full bg-primary-dark/95 backdrop-blur-md z-50 border-b border-primary-body/20">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-baseline space-x-1">
                        <span className="text-subtitle font-tilt-neon text-gradient">Dev.</span>
                        <span className="text-subtitle font-coolvetica text-primary-white">Joel</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300 hover:scale-105"
                        >
                            {t("nav.home")}
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300 hover:scale-105"
                        >
                            {t("nav.about")}
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300 hover:scale-105"
                        >
                            {t("nav.projects")}
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300 hover:scale-105"
                        >
                            {t("nav.contact")}
                        </button>
                    </nav>

                    {/* Social Links & Language Switch */}
                    <div className="hidden md:flex items-center space-x-6">
                        <LanguageSwitch />

                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/JoelDirdam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:scale-110"
                            >
                                <img
                                    src="https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751037266/github_logo_fq9eck.svg"
                                    alt="GitHub"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="https://linkedin.com/in/joel-violante-madrid/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:scale-110"
                            >
                                <img
                                    src="https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751037206/linkedin_logo_wq9lb8.svg"
                                    alt="LinkedIn"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a href="mailto:joel.madrid.code@gmail.com" className="transition-all duration-300 hover:scale-110">
                                <Mail size={24} color="#434391" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-primary-white hover:bg-gradient-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-6 pb-6 border-t border-primary-body/20">
                        <div className="flex flex-col space-y-6 pt-6">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="text-left text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300"
                            >
                                {t("nav.home")}
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-left text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300"
                            >
                                {t("nav.about")}
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="text-left text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300"
                            >
                                {t("nav.projects")}
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-left text-nav font-tilt-neon text-primary-body hover:text-gradient transition-all duration-300"
                            >
                                {t("nav.contact")}
                            </button>

                            {/* Mobile Language Switch */}
                            <div className="pt-4 border-t border-primary-body/20">
                                <LanguageSwitch />
                            </div>

                            {/* Mobile Social Links */}
                            <div className="flex space-x-6 pt-2">
                                <a
                                    href="https://github.com/JoelDirdam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-300 hover:scale-110"
                                >
                                    <img
                                        src="https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751037266/github_logo_fq9eck.svg"
                                        alt="GitHub"
                                        className="w-6 h-6"
                                    />
                                </a>
                                <a
                                    href="https://linkedin.com/in/joel-violante-madrid/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-300 hover:scale-110"
                                >
                                    <img
                                        src="https://res.cloudinary.com/dv1u9zrhl/image/upload/v1751037206/linkedin_logo_wq9lb8.svg"
                                        alt="LinkedIn"
                                        className="w-6 h-6"
                                    />
                                </a>
                                <a href="mailto:joel.madrid.code@gmail.com" className="transition-all duration-300 hover:scale-110">
                                    <Mail size={24} color="#434391" />
                                </a>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
