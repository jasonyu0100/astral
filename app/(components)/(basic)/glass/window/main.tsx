import { DivInputProps } from '@/(types)/main';

interface GlassWindowFrameProps extends DivInputProps {
  borderStyle?: string;
  roundedStyle?: string;
  children: React.ReactNode;
}

export function GlassWindowFrame({
  children,
  borderStyle,
  roundedStyle,
  ...props
}: GlassWindowFrameProps) {
  return (
    <div
      className={`relative ${borderStyle || ''} ${roundedStyle || ''} ${props.className || ''}`}
    >
      {children}
    </div>
  );
}
