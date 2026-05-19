"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-primary-dark border-t border-primary-body/20 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-coolvetica text-gradient mb-4">Dev. Joel</h3>
                        <p className="font-roboto text-primary-body mb-4 leading-relaxed">{t("footer.description")}</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/JoelDirdam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-body hover:text-primary-white transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/joel-violante-madrid/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-body hover:text-primary-white transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:joel.madrid.code@gmail.com"
                                className="text-primary-body hover:text-primary-white transition-colors"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-coolvetica text-primary-white mb-4">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-2 font-roboto">
                            <li>
                                <a href="#home" className="text-primary-body hover:text-gradient transition-colors">
                                    {t("nav.home")}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-primary-body hover:text-gradient transition-colors">
                                    {t("nav.about")}
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-primary-body hover:text-gradient transition-colors">
                                    {t("nav.skills")}
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-primary-body hover:text-gradient transition-colors">
                                    {t("nav.projects")}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-primary-body hover:text-gradient transition-colors">
                                    {t("nav.contact")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-coolvetica text-primary-white mb-4">{t("footer.services")}</h4>
                        <ul className="space-y-2 font-roboto text-primary-body">
                            <li>{t("footer.webDev")}</li>
                            <li>{t("footer.uiux")}</li>
                            <li>{t("footer.mobileDev")}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-body/20 mt-8 pt-8 text-center">
                    <p className="text-primary-body font-roboto flex items-center justify-center flex-wrap gap-1">
                        {t("footer.madeWith")} <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Joel A. Violante Madrid ©{" "}
                        {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
