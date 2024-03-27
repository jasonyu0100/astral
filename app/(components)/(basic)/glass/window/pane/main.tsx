interface GlassPaneProps {
    glassStyle?: string;
}

export function GlassWindowPane({ glassStyle }: GlassPaneProps) {
    return <div className={`absolute top-0 left-0 w-full h-full flex-shrink-0 ${glassStyle}`}></div>
}