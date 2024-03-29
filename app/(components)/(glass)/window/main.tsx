import { DivInputProps } from '@/(types)/main';

interface GlassWindowFrameProps extends DivInputProps {
  name: string;
  border?: string;
  rounded?: string;
  children: React.ReactNode;
}

export function GlassWindowFrame({
  children,
  name,
  border: borderStyle,
  rounded: roundedStyle,
  ...props
}: GlassWindowFrameProps) {
  return (
    <div
      id={name}
      className={`relative ${borderStyle || ''} ${roundedStyle || ''} ${props.className || ''}`}
    >
      {children}
    </div>
  );
}
