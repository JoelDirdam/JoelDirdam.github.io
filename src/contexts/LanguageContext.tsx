"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
    en: {
        // Header
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero Section
        "hero.title": "SOFTWARE ENGINEER",
        "hero.description":
            "Software Engineer specialized in Full Stack Development with solid experience in creating, maintaining and optimizing scalable web applications. Specialized in process automation using Python, RESTful API integration and development with modern frameworks.",
        "hero.cvPath": "/docs/JoelAViolanteMadridResume_EN.pdf",
        "hero.downloadNameCV": "joel_madrid_resume_en.pdf",
        "hero.btn_cv": "Download Resume",
        "hero.btn_contact": "Contact me",

        // About Section
        "about.title": "About Me",
        "about.subtitle":
            "I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.",
        "about.cleanCode.title": "Clean Code",
        "about.cleanCode.description": "Writing maintainable, scalable, and efficient code following best practices.",
        "about.uiux.title": "UI/UX Design",
        "about.uiux.description": "Creating beautiful and intuitive user interfaces with great user experience.",
        "about.responsive.title": "Responsive Design",
        "about.responsive.description": "Building applications that work perfectly on all devices and screen sizes.",
        "about.performance.title": "Web Performance",
        "about.performance.description": "Optimizing applications for speed, accessibility, and search engine visibility.",
        "about.journey.title": "My Journey",
        "about.journey.description1":
            "I started my career as a Software Engineer over 2 years ago, specializing in Full Stack Development. I have worked on large-scale projects for CONAFOR and World Bank, optimizing processes and developing innovative solutions.",
        "about.journey.description2":
            "When I'm not programming, I'm exploring new technologies, looking to improve professionally, taking courses or mentoring to feed my knowledge.",
        "about.frontend": "Frontend Development",
        "about.backend": "Backend Development",
        "about.automation": "Process Automation",

        // Skills Section
        "skills.title": "Skills & Technologies",
        "skills.subtitle": "Here are the technologies and tools I work with to bring ideas to life.",
        "skills.frontend": "Frontend",
        "skills.backend": "Backend",
        "skills.tools": "Tools & Others",

        // Projects Section
        "projects.title": "Featured Projects",
        "projects.subtitle": "Here are some of my recent projects that showcase my skills and experience.",
        "projects.sppif.title": "SPPIF System - Universidad Juarez del Estado de Durango, CONAFOR and World Bank",
        "projects.sppif.description":
            "Mexico's Forest Fire Danger Prediction System (SPPIF) is a decision support tool for fire management in Mexico. I implemented automation of satellite image processing and monitoring systems with early warnings, reducing incidences by 80%.",
        "projects.alpha.title": "Digital Catalog - Freelancer (Alpha Lubricants México)",
        "projects.alpha.description":
            "Responsive web system developed with Angular for digital catalogs of business products. I improved user interaction by 40% and expanded target audience reach.",
        "projects.inv.title": "Digital Invitations Project - Freelancer",
        "projects.inv.description":
            "Designed dynamic interfaces and developed a RESTful API with Node.js and MongoDB to manage non-relational data, ensuring high availability.",
        "projects.automation.title": "Geospatial Process Automation",
        "projects.automation.description":
            "Automated Python scripts for satellite image processing (Sentinel-2, GOES, NOAA). I optimized geospatial data processing time by 65%.",
        "projects.fullstack.title": "Full Stack Applications - Advante Digital",
        "projects.fullstack.description":
            "Development and support of web and mobile applications using modern technologies. I increased system performance by 60% through code optimization.",
        "projects.liveDemo": "Live Demo",
        "projects.code": "Code",
        "projects.company": "Team work",

        // Contact Section
        "contact.title": "Get In Touch",
        "contact.subtitle":
            "I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!",
        "contact.talkProject": "Let's talk about your project",
        "contact.description":
            "Whether you have a project in mind or just want to chat about technology, I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.sendMessage": "Send me a message",
        "contact.yourName": "Your Name",
        "contact.yourEmail": "Your Email",
        "contact.yourMessage": "Your Message",
        "contact.send": "Send Message",
        "contact.sending": "Sending...",
        "contact.messageSent": "Message sent successfully! I'll get back to you soon.",
        "contact.errorSending": "Error sending message. Please try again or contact me directly.",
        "contact.captchaRequired": "Please complete the captcha verification.",
        "contact.fillAllFields": "Please fill in all fields.",

        // Footer
        "footer.description": "Full Stack Developer specialized in process automation and scalable web development.",
        "footer.quickLinks": "Quick Links",
        "footer.services": "Services",
        "footer.webDev": "Web Development",
        "footer.uiux": "UI/UX Design",
        "footer.mobileDev": "Mobile Development",
        "footer.consulting": "Consulting",
        "footer.madeWith": "Made with",
    },
    es: {
        // Header
        "nav.home": "Inicio",
        "nav.about": "Sobre mi",
        "nav.skills": "Habilidades",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",

        // Hero Section
        "hero.title": "INGENIERO\nEN SOFTWARE",
        "hero.description":
            "Ingeniero en Software especializado en Desarrollo Full Stack con sólida experiencia en creación, mantenimiento y optimización de aplicaciones web escalables. Especializado en automatización de procesos mediante Python, integración de APIs RESTful y desarrollo con frameworks modernos.",
        "hero.cvPath": "/docs/JoelAViolanteMadridResume_ES.pdf",
        "hero.downloadNameCV": "joel_madrid_cv_es.pdf",
        "hero.btn_cv": "Descargar CV",
        "hero.btn_contact": "Contáctame",

        // About Section
        "about.title": "Acerca de Mí",
        "about.subtitle":
            "Soy un desarrollador full-stack apasionado con más de 3 años de experiencia creando soluciones digitales que marcan la diferencia. Me encanta convertir problemas complejos en soluciones simples, hermosas e intuitivas.",
        "about.cleanCode.title": "Código Limpio",
        "about.cleanCode.description":
            "Escribiendo código mantenible, escalable y eficiente siguiendo las mejores prácticas.",
        "about.uiux.title": "Diseño UI/UX",
        "about.uiux.description": "Creando interfaces de usuario hermosas e intuitivas con gran experiencia de usuario.",
        "about.responsive.title": "Diseño Responsivo",
        "about.responsive.description":
            "Construyendo aplicaciones que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.",
        "about.performance.title": "Rendimiento Web",
        "about.performance.description":
            "Optimizando aplicaciones para velocidad, accesibilidad y visibilidad en motores de búsqueda.",
        "about.journey.title": "Mi Trayectoria",
        "about.journey.description1":
            "Comencé mi carrera como Ingeniero en Software hace más de 2 años, especializándome en Desarrollo Full Stack. He trabajado en proyectos de gran escala para CONAFOR y Banco Mundial, optimizando procesos y desarrollando soluciones innovadoras.",
        "about.journey.description2":
            "Cuando no estoy programando, me dedico a explorar nuevas tecnologías, buscando mejorar profesionalmente, haciendo cursos o en mentorias para alimentar mis conocimientos.",
        "about.frontend": "Desarrollo Frontend",
        "about.backend": "Desarrollo Backend",
        "about.automation": "Automatización de Procesos",

        // Skills Section
        "skills.title": "Habilidades y Tecnologías",
        "skills.subtitle": "Estas son las tecnologías y herramientas con las que trabajo para dar vida a las ideas.",
        "skills.frontend": "Frontend",
        "skills.backend": "Backend",
        "skills.tools": "Herramientas y Otros",

        // Projects Section
        "projects.title": "Proyectos Destacados",
        "projects.subtitle": "Aquí tienes algunos de mis proyectos recientes que muestran mis habilidades y experiencia.",
        "projects.sppif.title": "Sistema SPPIF - Universidad Juarez del Estado de Durango, CONAFOR y Banco Mundial",
        "projects.sppif.description":
            "El Sistema de Predicción de Peligro de Incendios Forestales (SPPIF) de México, es una herramienta de apoyo a la toma de decisiones para el manejo del fuego en México. Implementé automatización de procesamiento de imágenes satelitales y sistemas de monitoreo con alertas tempranas, reduciendo incidencias en un 80%.",
        "projects.alpha.title": "Catálogo Digital - Freelancer (Alpha Lubricants México)",
        "projects.alpha.description":
            "Sistema web responsivo desarrollado con Angular para catálogos digitales de productos empresariales. Mejoré la interacción del usuario en un 40% y amplié el alcance del público objetivo.",
        "projects.inv.title": "Proyecto de Invitaciones Digitales - Freelancer",
        "projects.inv.description":
            "Diseñé interfaces dinámicas y desarrollé una API RESTful con Node.js y MongoDB para gestionar datos no relacionales, asegurando alta disponibilidad.",
        "projects.automation.title": "Automatización de Procesos Geoespaciales",
        "projects.automation.description":
            "Scripts automatizados en Python para procesamiento de imágenes satelitales (Sentinel-2, GOES, NOAA). Optimicé el tiempo de procesamiento de datos geoespaciales en un 65%.",
        "projects.fullstack.title": "Aplicaciones Full Stack - Advante Digital",
        "projects.fullstack.description":
            "Desarrollo y soporte de aplicaciones web y móviles usando tecnologías modernas. Incrementé el rendimiento del sistema en un 60% mediante optimización de código.",
        "projects.liveDemo": "Demo",
        "projects.code": "Código",
        "projects.company": "Equipo de trabajo",

        // Contact Section
        "contact.title": "Ponte en Contacto Conmigo",
        "contact.subtitle":
            "¡Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes. Creemos algo increíble juntos!",
        "contact.talkProject": "Hablemos sobre tu proyecto",
        "contact.description":
            "Ya sea que tengas un proyecto en mente o simplemente quieras charlar sobre tecnología, me encantaría escucharte. Envíame un mensaje y te responderé lo antes posible.",
        "contact.email": "Correo",
        "contact.phone": "Teléfono",
        "contact.location": "Ubicación",
        "contact.sendMessage": "Envíame un mensaje",
        "contact.yourName": "Tu Nombre",
        "contact.yourEmail": "Tu Correo",
        "contact.yourMessage": "Tu Mensaje",
        "contact.send": "Enviar Mensaje",
        "contact.sending": "Enviando...",
        "contact.messageSent": "¡Mensaje enviado exitosamente! Te responderé pronto.",
        "contact.errorSending": "Error al enviar el mensaje. Inténtalo de nuevo o contáctame directamente.",
        "contact.captchaRequired": "Por favor completa la verificación captcha.",
        "contact.fillAllFields": "Por favor completa todos los campos.",

        // Footer
        "footer.description":
            "Full Stack Developer especializado en automatización de procesos y desarrollo web escalable.",
        "footer.quickLinks": "Enlaces Rápidos",
        "footer.services": "Servicios",
        "footer.webDev": "Desarrollo Web",
        "footer.uiux": "Diseño UI/UX",
        "footer.mobileDev": "Desarrollo Móvil",
        "footer.consulting": "Consultoría",
        "footer.madeWith": "Hecho con",
    },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
            setLanguage(savedLanguage)
        }
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)
    }

    const t = (key: string): string => {
        return translations[language][key as keyof (typeof translations)[typeof language]] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
