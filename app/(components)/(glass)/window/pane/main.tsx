interface GlassPaneProps {
    glassFx?: string;
}

export function GlassWindowPane({ glassFx: glassFx }: GlassPaneProps) {
    return <div className={`absolute top-0 left-0 w-full h-full flex-shrink-0 ${glassFx}`}></div>
}