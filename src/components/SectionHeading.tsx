interface SectionHeadingProps {
    title: string
    subtitle: string
    className?: string
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
    return (
        <div className={`text-center mb-16 ${className}`}>
            <h2 className="text-3xl md:text-5xl font-tilt-neon text-primary-white mb-4">{title}</h2>
            <p className="text-lg md:text-body font-roboto text-primary-body max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
    )
}
