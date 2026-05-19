// Configuración de EmailJS y reCAPTCHA (variables opcionales en .env)
export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_w8lz5as",
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_thfq2ak",
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Sq-7sxQ-a1eeuZTfX",
}

export const RECAPTCHA_SITE_KEY =
    import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LcdB20rAAAAAGJcFuJMhJG79FeVGqkfDiRGH_5N"
