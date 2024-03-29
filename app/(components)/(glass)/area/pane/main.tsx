interface GlassAreaPaneProps {
    glassStyle?: string;
}

export function GlassAreaPane({ glassStyle }: GlassAreaPaneProps) {
    return <div className={`absolute top-0 left-0 w-full h-full flex-shrink-0 ${glassStyle}`}></div>
}