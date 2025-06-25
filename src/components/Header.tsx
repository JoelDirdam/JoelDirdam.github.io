"use client"

import { useState } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import LanguageToggle from "./LanguageToggle"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t } = useLanguage()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.home")}
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.about")}
                        </button>
                        <button
                            onClick={() => scrollToSection("skills")}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.skills")}
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.projects")}
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.contact")}
                        </button>
                    </nav>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageToggle />
                        <a
                            href="https://github.com/joeldirdam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/joelmadrid/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:joel.madrid.code@gmail.com"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-4 pt-4">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {t("nav.home")}
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {t("nav.about")}
                            </button>
                            <button
                                onClick={() => scrollToSection("skills")}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {t("nav.skills")}
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {t("nav.projects")}
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {t("nav.contact")}
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
