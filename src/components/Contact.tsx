"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"
import { EMAILJS_CONFIG, RECAPTCHA_SITE_KEY } from "../config/emailjs"
import SectionHeading from "./SectionHeading"

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
    const [captchaLoadError, setCaptchaLoadError] = useState(false)
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const { t, language } = useLanguage()

    useEffect(() => {
        emailjs.init({
            publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
            blockHeadless: true,
        })
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (captchaLoadError) {
            setFormStatus({
                type: "error",
                message: t("contact.captchaLoadError"),
            })
            return
        }

        if (!captchaValue) {
            setFormStatus({
                type: "error",
                message: t("contact.captchaRequired"),
            })
            return
        }

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setFormStatus({
                type: "error",
                message: t("contact.fillAllFields"),
            })
            return
        }

        setFormStatus({ type: "loading", message: t("contact.sending") })

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                user_name: formData.name,
                user_email: formData.email,
                to_email: "joel.madrid.code@gmail.com",
                reply_to: formData.email,
                subject: `Portfolio - ${formData.name}`,
                message: formData.message,
            }

            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
            )

            if (result.status === 200 || result.text === "OK") {
                setFormStatus({
                    type: "success",
                    message: t("contact.messageSent"),
                })

                setFormData({ name: "", email: "", message: "" })
                setCaptchaValue(null)
                recaptchaRef.current?.reset()

                setTimeout(() => {
                    setFormStatus({ type: "idle", message: "" })
                }, 5000)
            } else {
                throw new Error(`Unexpected status: ${result.status}`)
            }
        } catch (error) {
            console.error("Error sending email:", error)
            setFormStatus({
                type: "error",
                message: t("contact.errorSending"),
            })

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

        if (formStatus.type !== "idle") {
            setFormStatus({ type: "idle", message: "" })
        }
    }

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value)
        if (value && formStatus.type === "error") {
            setFormStatus({ type: "idle", message: "" })
        }
    }

    const handleCaptchaErrored = () => {
        setCaptchaLoadError(true)
        setFormStatus({
            type: "error",
            message: t("contact.captchaLoadError"),
        })
    }

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.message.trim() &&
        captchaValue &&
        !captchaLoadError
    const isLoading = formStatus.type === "loading"

    const contactItems = [
        {
            icon: Mail,
            label: t("contact.email"),
            value: "joel.madrid.code@gmail.com",
            href: "mailto:joel.madrid.code@gmail.com",
        },
        {
            icon: Phone,
            label: t("contact.phone"),
            value: "+52 618 169 8368",
            href: "tel:+526181698368",
        },
        {
            icon: MapPin,
            label: t("contact.location"),
            value: t("contact.locationValue"),
            href: undefined,
        },
    ]

    return (
        <section id="contact" className="py-20 bg-primary-dark border-t border-primary-body/10">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-coolvetica text-gradient mb-6">{t("contact.talkProject")}</h3>
                        <p className="font-roboto text-primary-body mb-8 leading-relaxed">{t("contact.description")}</p>

                        <div className="space-y-6">
                            {contactItems.map(({ icon: Icon, label, value, href }) => (
                                <div key={label} className="flex items-center space-x-4">
                                    <div className="bg-gradient-primary p-3 rounded-full">
                                        <Icon className="h-6 w-6 text-primary-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-coolvetica text-primary-white">{label}</h4>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="font-roboto text-primary-body hover:text-gradient transition-colors"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="font-roboto text-primary-body">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card className="portfolio-card border-0">
                        <CardHeader>
                            <CardTitle className="text-xl font-coolvetica text-primary-white">{t("contact.sendMessage")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder={t("contact.yourName")}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="portfolio-input h-12"
                                />

                                <Input
                                    type="email"
                                    name="email"
                                    placeholder={t("contact.yourEmail")}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="portfolio-input h-12"
                                />

                                <Textarea
                                    name="message"
                                    placeholder={t("contact.yourMessage")}
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="portfolio-input resize-none"
                                />

                                <div className="flex justify-center min-h-[78px]">
                                    {RECAPTCHA_SITE_KEY ? (
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={RECAPTCHA_SITE_KEY}
                                            onChange={handleCaptchaChange}
                                            onErrored={handleCaptchaErrored}
                                            onExpired={() => setCaptchaValue(null)}
                                            theme="dark"
                                            hl={language}
                                        />
                                    ) : (
                                        <p className="text-sm text-red-400 font-roboto">{t("contact.captchaLoadError")}</p>
                                    )}
                                </div>

                                {formStatus.message && (
                                    <div
                                        className={`flex items-center space-x-2 p-3 rounded-xl font-roboto text-sm ${
                                            formStatus.type === "success"
                                                ? "bg-green-500/10 text-green-300 border border-green-500/30"
                                                : formStatus.type === "error"
                                                  ? "bg-red-500/10 text-red-300 border border-red-500/30"
                                                  : "bg-blue-500/10 text-blue-300 border border-blue-500/30"
                                        }`}
                                    >
                                        {formStatus.type === "success" && <CheckCircle className="h-5 w-5 shrink-0" />}
                                        {formStatus.type === "error" && <AlertCircle className="h-5 w-5 shrink-0" />}
                                        {formStatus.type === "loading" && <Loader2 className="h-5 w-5 animate-spin shrink-0" />}
                                        <span className="font-medium">{formStatus.message}</span>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-white font-roboto font-bold rounded-full py-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] border-0"
                                    disabled={!isFormValid || isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            {t("contact.sending")}
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5" />
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
