"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Projects() {
    const { t } = useLanguage()

    const projects = [
        {
            title: t("projects.sppif.title"),
            description: t("projects.sppif.description"),
            image: "src\\assets\\SPPIF.jpg",
            technologies: ["Python", "PHP", "HTML", "CSS", "Google Earth Engine", "Sentinel-2", "ArcGis"],
            liveUrl: "https://forestales.ujed.mx/incendios2/#",
            githubUrl: "",
        },
        {
            title: t("projects.alpha.title"),
            description: t("projects.alpha.description"),
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
            technologies: ["Angular", "TypeScript", "CSS3", "Responsive Design"],
            liveUrl: "",
            githubUrl: "https://github.com/JoelDirdam/alphalubricants",
        },
        {
            title: t("projects.inv.title"),
            description: t("projects.inv.description"),
            image: "src\\assets\\inv.jpg",
            technologies: ["React", "TypeScript", "Tailwind", "Responsive Design", "RESTful", "Node.js", "MongoDB"],
            liveUrl: "https://chaimanzana.com/invitations/grad/lniuat2024/Mayra/Gonzalez/1/",
            githubUrl: "https://github.com/JoelDirdam/chai-invitaciones",
        },
        {
            title: t("projects.fullstack.title"),
            description: t("projects.fullstack.description"),
            image: "src\\assets\\advantedigital.jpg",
            technologies: ["Flutter", "PHP", "JavaScript", "Git", "Full Stack"],
            liveUrl: "https://advantedigital.com/",
            githubUrl: "",
        },
    ]

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("projects.title")}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("projects.subtitle")}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="outline" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                {t("projects.liveDemo")}
                                            </a>
                                        </Button>
                                    )}
                                    {project.githubUrl && ( 
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <Github className="mr-2 h-4 w-4" />
                                                {t("projects.code")}
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
