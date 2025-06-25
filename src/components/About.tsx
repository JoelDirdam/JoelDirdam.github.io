"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function About() {
    const { t } = useLanguage()

    const features = [
        {
            icon: <Code className="h-8 w-8 text-blue-600" />,
            title: t("about.cleanCode.title"),
            description: t("about.cleanCode.description"),
        },
        {
            icon: <Palette className="h-8 w-8 text-blue-600" />,
            title: t("about.uiux.title"),
            description: t("about.uiux.description"),
        },
        {
            icon: <Smartphone className="h-8 w-8 text-blue-600" />,
            title: t("about.responsive.title"),
            description: t("about.responsive.description"),
        },
        {
            icon: <Globe className="h-8 w-8 text-blue-600" />,
            title: t("about.performance.title"),
            description: t("about.performance.description"),
        },
    ]

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("about.title")}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("about.subtitle")}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("about.journey.title")}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{t("about.journey.description1")}</p>
                            <p className="text-gray-600 dark:text-gray-300">{t("about.journey.description2")}</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 dark:text-gray-300">{t("about.frontend")}</span>
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">80%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: "80%" }}></div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 dark:text-gray-300">{t("about.backend")}</span>
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 dark:text-gray-300">{t("about.automation")}</span>
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">65%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
