"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Building2 } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import SectionHeading from "./SectionHeading"

export default function Projects() {
    const { t } = useLanguage()

    const projects = [
        {
            title: t("projects.sppif.title"),
            description: t("projects.sppif.description"),
            image: "/images/SPPIF.jpg",
            technologies: ["Python", "PHP", "HTML", "CSS", "Google Earth Engine", "Sentinel-2", "ArcGIS"],
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
            image: "/images/inv.jpg",
            technologies: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "RESTful"],
            liveUrl: "https://chaimanzana.com/invitations/grad/lniuat2024/Mayra/Gonzalez/1/",
            githubUrl: "https://github.com/JoelDirdam/chai-invitaciones",
        },
        {
            title: t("projects.fullstack.title"),
            description: t("projects.fullstack.description"),
            image: "/images/advantedigital.jpg",
            technologies: ["Flutter", "PHP", "CakePHP", "Next.js", "JavaScript", "SQL", "Android Studio"],
            liveUrl: "https://app.myspalive.com/",
            githubUrl: "",
            corporateUrl: "https://advantedigital.com/",
        },
    ]

    return (
        <section id="projects" className="py-20 bg-primary-dark border-t border-primary-body/10">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="portfolio-card overflow-hidden border-0">
                            <div className="relative h-48 overflow-hidden bg-primary-dark/60">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-90"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src =
                                            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop&crop=center"
                                    }}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent pointer-events-none" />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-coolvetica text-primary-white">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-roboto text-primary-body mb-4 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="outline" className="portfolio-badge text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {project.liveUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="rounded-full border-primary-body/40 text-primary-white hover:bg-gradient-primary hover:border-transparent font-roboto"
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                {t("projects.liveDemo")}
                                            </a>
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="rounded-full border-primary-body/40 text-primary-white hover:bg-gradient-primary hover:border-transparent font-roboto"
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center"
                                            >
                                                <Github className="mr-2 h-4 w-4" />
                                                {t("projects.code")}
                                            </a>
                                        </Button>
                                    )}
                                    {project.corporateUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="rounded-full border-primary-body/40 text-primary-white hover:bg-gradient-primary hover:border-transparent font-roboto"
                                        >
                                            <a
                                                href={project.corporateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center"
                                            >
                                                <Building2 className="mr-2 h-4 w-4" />
                                                {t("projects.company")}
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
