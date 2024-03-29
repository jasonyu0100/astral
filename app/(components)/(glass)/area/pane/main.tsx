interface GlassAreaPaneProps {
    glassFx?: string;
}

export function GlassAreaPane({ glassFx: glassFx }: GlassAreaPaneProps) {
    return <div className={`absolute top-0 left-0 w-full h-full flex-shrink-0 ${glassFx}`}></div>
}