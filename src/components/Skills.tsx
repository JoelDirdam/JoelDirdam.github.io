"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "../contexts/LanguageContext"

export default function Skills() {
    const { t } = useLanguage()

    const skillCategories = [
        {
            title: t("skills.frontend"),
            skills: [
                "React",
                "Next.js",
                "Angular",
                "Vue.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
            ],
        },
        {
            title: t("skills.backend"),
            skills: ["Node.js", "Python", "PHP", "CakePHP", "Django", "REST APIs", "GraphQL", "PostgreSQL", "SQL", "NoSQL", "Firebase"],
        },
        {
            title: t("skills.tools"),
            skills: [
                "Git",
                "AWS",
                "Azure",
                "Google Cloud",
                "Flutter",
                "React Native",
                "WordPress",
                "Postman",
                "Jenkins",
                "Jira",
                "Slack",
            ],
        },
    ]

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("skills.title")}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("skills.subtitle")}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl text-center text-gray-900 dark:text-white">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="secondary"
                                            className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200"
                                        >
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
