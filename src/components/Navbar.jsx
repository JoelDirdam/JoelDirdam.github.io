import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Mi Portafolio</h1>
                <div className="flex space-x-4">
                    <a href="#inicio" className="hover:text-blue-300">Inicio</a>
                    <a href="#proyectos" className="hover:text-blue-300">Proyectos</a>
                    <a href="#contacto" className="hover:text-blue-300">Contacto</a>
                </div>
            </div>
        </nav>
    );
}