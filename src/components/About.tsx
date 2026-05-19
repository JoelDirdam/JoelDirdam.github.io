"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

export default function About() {
    const { t } = useLanguage()

    const features = [
        {
            icon: <Code className="h-8 w-8 text-[#1A31FF]" />,
            title: t("about.cleanCode.title"),
            description: t("about.cleanCode.description"),
        },
        {
            icon: <Palette className="h-8 w-8 text-[#B651FF]" />,
            title: t("about.uiux.title"),
            description: t("about.uiux.description"),
        },
        {
            icon: <Smartphone className="h-8 w-8 text-[#1A31FF]" />,
            title: t("about.responsive.title"),
            description: t("about.responsive.description"),
        },
        {
            icon: <Globe className="h-8 w-8 text-[#B651FF]" />,
            title: t("about.performance.title"),
            description: t("about.performance.description"),
        },
    ]

    const skills = [
        { label: t("about.frontend"), value: 85 },
        { label: t("about.backend"), value: 88 },
        { label: t("about.automation"), value: 75 },
    ]

    return (
        <section id="about" className="py-20 bg-primary-dark border-t border-primary-body/10">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("about.title")} subtitle={t("about.subtitle")} />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card key={index} className="portfolio-card text-center">
                            <CardContent className="p-6">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-coolvetica text-primary-white mb-2">{feature.title}</h3>
                                <p className="font-roboto text-primary-body text-base">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="portfolio-card p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-coolvetica text-gradient mb-4">{t("about.journey.title")}</h3>
                            <p className="font-roboto text-primary-body mb-4 leading-relaxed">{t("about.journey.description1")}</p>
                            <p className="font-roboto text-primary-body leading-relaxed">{t("about.journey.description2")}</p>
                        </div>
                        <div className="space-y-6">
                            {skills.map((skill) => (
                                <div key={skill.label}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-roboto text-primary-white">{skill.label}</span>
                                        <span className="font-roboto font-bold text-gradient">{skill.value}%</span>
                                    </div>
                                    <div className="w-full bg-primary-body/20 rounded-full h-2.5 overflow-hidden">
                                        <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${skill.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
