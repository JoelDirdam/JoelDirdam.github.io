"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

export default function Skills() {
    const { t } = useLanguage()

    const skillCategories = [
        {
            title: t("skills.frontend"),
            skills: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
                "Angular",
            ],
        },
        {
            title: t("skills.backend"),
            skills: ["Node.js", "Python", "PHP", "CakePHP", "Django", "REST APIs", "PostgreSQL", "SQL", "Firebase", "GraphQL"],
        },
        {
            title: t("skills.tools"),
            skills: ["Git", "Flutter", "AWS", "Docker", "Postman", "Jenkins", "Jira", "WordPress", "Google Cloud", "Slack"],
        },
    ]

    return (
        <section id="skills" className="py-20 bg-primary-dark border-t border-primary-body/10">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="portfolio-card border-0">
                            <CardHeader>
                                <CardTitle className="text-xl text-center font-coolvetica text-gradient">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge key={skillIndex} variant="secondary" className="portfolio-badge text-sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
