import { DivInputProps } from "@/(lgx)/types/element/main";

interface GlassAreaContentsProps extends DivInputProps {
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