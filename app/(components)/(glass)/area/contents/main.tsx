import { DivInputProps } from "@/(types)/main";

interface GlassAreaContentsProps extends DivInputProps {
  contentStyle?: string;
  children: React.ReactNode;
}

export function GlassAreaContents({ children, ...props }: GlassAreaContentsProps) {
  return (
    <div
      {...props}
      className={`absolute top-0 h-full w-full ${props.className || ''}`}
    >
      {children}
    </div>
  );
}