import { DivInputProps } from "@/(types)/element/main";

interface GlassWindowFrameProps extends DivInputProps {
  name: string;
  borderFx?: string;
  roundedFx?: string;
  children: React.ReactNode;
}

export function GlassWindowFrame({
  children,
  name,
  borderFx: borderFx,
  roundedFx: roundedFx,
  ...props
}: GlassWindowFrameProps) {
  return (
    <div
      id={name}
      className={`relative ${borderFx || ''} ${roundedFx || ''} ${props.className || ''}`}
    >
      {children}
    </div>
  );
}
