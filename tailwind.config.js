/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                // Kit UI Colors
                primary: {
                    dark: "#000E3E", // Fondo principal, modales
                    white: "#FFFFFF", // Títulos y textos de botones
                    body: "#D9D9D9", // Cuerpo
                    email: "#434391", // Color específico para email
                },
                gradient: {
                    from: "#1A31FF",
                    to: "#B651FF",
                },
                // Shadcn colors (mantener compatibilidad)
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
            },
            fontFamily: {
                "tilt-neon": ["Tilt Neon", "cursive"],
                coolvetica: ["Coolvetica", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            fontSize: {
                "display-xl": "80px",
                "display-lg": "64px",
                subtitle: "32px",
                nav: "20px",
                body: "20px",
            },
            backgroundImage: {
                "gradient-primary": "linear-gradient(135deg, #1A31FF 0%, #B651FF 100%)",
            },
        },
    },
    plugins: [],
}
