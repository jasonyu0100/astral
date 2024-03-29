import { DivInputProps } from "@/(logic)/types/element/main";

interface RoundedContainerProps extends DivInputProps {
    roundedStyle?: string;
    children: React.ReactNode;
}

export function RoundedContainer({ roundedStyle: borderStyle, children, ...props }: RoundedContainerProps) {
    return <div {...props} className={`relative ${borderStyle} ${props.className || ''}`}>{children}</div>
}