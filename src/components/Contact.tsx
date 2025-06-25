"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"
import { EMAILJS_CONFIG, RECAPTCHA_SITE_KEY } from "../config/emailjs"

interface FormData {
    name: string
    email: string
    message: string
}

interface FormStatus {
    type: "idle" | "loading" | "success" | "error"
    message: string
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    })

    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: "idle",
        message: "",
    })

    const [captchaValue, setCaptchaValue] = useState<string | null>(null)
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const { t } = useLanguage()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validar captcha
        if (!captchaValue) {
            setFormStatus({
                type: "error",
                message: t("contact.captchaRequired"),
            })
            return
        }

        // Validar campos
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setFormStatus({
                type: "error",
                message: t("contact.fillAllFields"),
            })
            return
        }

        setFormStatus({ type: "loading", message: t("contact.sending") })

        try {
            // Preparar los datos del template
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                to_email: "joel.madrid.code@gmail.com",
                subject: "Mensaje enviado desde el portafolio",
                message: formData.message,
                reply_to: formData.email,
            }

            // Enviar email usando EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY,
            )

            if (result.status === 200) {
                setFormStatus({
                    type: "success",
                    message: t("contact.messageSent"),
                })

                // Limpiar formulario
                setFormData({ name: "", email: "", message: "" })
                setCaptchaValue(null)
                recaptchaRef.current?.reset()

                // Limpiar mensaje después de 5 segundos
                setTimeout(() => {
                    setFormStatus({ type: "idle", message: "" })
                }, 5000)
            }
        } catch (error) {
            console.error("Error sending email:", error)
            setFormStatus({
                type: "error",
                message: t("contact.errorSending"),
            })

            // Limpiar mensaje de error después de 5 segundos
            setTimeout(() => {
                setFormStatus({ type: "idle", message: "" })
            }, 5000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

        // Limpiar mensaje de estado si el usuario empieza a escribir
        if (formStatus.type !== "idle") {
            setFormStatus({ type: "idle", message: "" })
        }
    }

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value)
    }

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim() && captchaValue
    const isLoading = formStatus.type === "loading"

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("contact.title")}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("contact.talkProject")}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">{t("contact.description")}</p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("contact.email")}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">joel.madrid.code@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("contact.phone")}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">+52 618 169 8368</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("contact.location")}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">México (GMT-6)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">{t("contact.sendMessage")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder={t("contact.yourName")}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        className="transition-all duration-200"
                                    />
                                </div>

                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder={t("contact.yourEmail")}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        className="transition-all duration-200"
                                    />
                                </div>

                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder={t("contact.yourMessage")}
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isLoading}
                                        className="transition-all duration-200 resize-none"
                                    />
                                </div>

                                {/* reCAPTCHA */}
                                <div className="flex justify-center">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={RECAPTCHA_SITE_KEY}
                                        onChange={handleCaptchaChange}
                                        theme="light"
                                        size="normal"
                                    />
                                </div>

                                {/* Mensaje de estado */}
                                {formStatus.message && (
                                    <div
                                        className={`flex items-center space-x-2 p-3 rounded-md ${formStatus.type === "success"
                                                ? "bg-green-50 text-green-700 border border-green-200"
                                                : formStatus.type === "error"
                                                    ? "bg-red-50 text-red-700 border border-red-200"
                                                    : "bg-blue-50 text-blue-700 border border-blue-200"
                                            }`}
                                    >
                                        {formStatus.type === "success" && <CheckCircle className="h-5 w-5" />}
                                        {formStatus.type === "error" && <AlertCircle className="h-5 w-5" />}
                                        {formStatus.type === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
                                        <span className="text-sm font-medium">{formStatus.message}</span>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    disabled={!isFormValid || isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {t("contact.sending")}
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            {t("contact.send")}
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
