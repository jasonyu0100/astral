interface GlassPaneProps {
    glass?: string;
}

export function GlassWindowPane({ glass: glassStyle }: GlassPaneProps) {
    return <div className={`absolute top-0 left-0 w-full h-full flex-shrink-0 ${glassStyle}`}></div>
}