import { DivInputProps } from "@/(types)/main";

interface GlassFrameProps extends DivInputProps {
    borderStyle?: string;
    children: React.ReactNode;
}

export function GlassFrame({ borderStyle, children, ...props }: GlassFrameProps) {
    return <div {...props} className={`relative ${borderStyle} ${props.className || ''}`}>{children}</div>
}