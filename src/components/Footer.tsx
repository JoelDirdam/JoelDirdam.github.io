"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
                        <p className="text-gray-400 mb-4">{t("footer.description")}</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/joelviolante"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/joel-violante-madrid/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:joel.madrid.code@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                                    {t("nav.home")}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    {t("nav.about")}
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                                    {t("nav.skills")}
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                                    {t("nav.projects")}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    {t("nav.contact")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t("footer.services")}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>{t("footer.webDev")}</li>
                            <li>{t("footer.uiux")}</li>
                            <li>{t("footer.mobileDev")}</li>
                            <li>{t("footer.consulting")}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 flex items-center justify-center">
                        {t("footer.madeWith")} <Heart className="mx-2 h-4 w-4 text-red-500" /> by Joel A. Violante Madrid ©{" "}
                        {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
