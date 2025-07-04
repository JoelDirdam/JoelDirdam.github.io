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
                "gradient-primary-mirroring": "linear-gradient(135deg, #B651FF 0%, #1A31FF 100%)",
            },
            animation: {
                "float-1": "float1 6s ease-in-out infinite",
                "float-2": "float2 8s ease-in-out infinite",
                "float-3": "float3 7s ease-in-out infinite",
                "float-4": "float4 9s ease-in-out infinite",
                "float-5": "float5 5s ease-in-out infinite",
                "float-6": "float6 7.5s ease-in-out infinite",
                "float-7": "float7 6.5s ease-in-out infinite",
            },
            keyframes: {
                float1: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-20px) rotate(5deg)" },
                },
                float2: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-15px) rotate(-3deg)" },
                },
                float3: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-25px) rotate(7deg)" },
                },
                float4: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-18px) rotate(-5deg)" },
                },
                float5: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-22px) rotate(4deg)" },
                },
                float6: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-16px) rotate(-6deg)" },
                },
                float7: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-20px) rotate(3deg)" },
                },
            },
        },
    },
    plugins: [],
}
