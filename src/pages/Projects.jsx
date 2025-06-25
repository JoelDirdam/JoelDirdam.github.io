import React from "react";

export default function Projects() {
    const proyectos = [
        {
            nombre: "Automatización CONAFOR",
            descripcion: "Scripts en Python para procesamiento de imágenes satelitales.",
            tecnologias: ["Python", "PostGIS", "Google Earth Engine"],
        },
        {
            nombre: "MySpaLive (Flutter)",
            descripcion: "App móvil para gestión de spas con Stripe y Firebase.",
            tecnologias: ["Flutter", "CakePHP", "Twilio"],
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {proyectos.map((proyecto, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{proyecto.nombre}</h3>
                            <p className="mb-4">{proyecto.descripcion}</p>
                            <div className="flex flex-wrap gap-2">
                                {proyecto.tecnologias.map((tech, i) => (
                                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}