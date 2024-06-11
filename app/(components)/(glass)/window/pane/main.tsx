import { DivInputProps } from "@/(types)/props/main";

interface GlassPaneProps extends DivInputProps {
    glassFx?: string;
}

export function GlassWindowPane({ glassFx: glassFx, ...props }: GlassPaneProps) {
    return <div className={`absolute top-0 left-0 w-full h-full flex-shrink-0 ${glassFx} ${props.className}`}></div>
}