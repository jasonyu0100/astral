import { DivInputProps } from '@/(types)/main';

interface GlassEffectWrapperProps extends DivInputProps {
  roundedStyle?: string;
  effectStyle?: string;
  children: React.ReactNode;
}

export function GlassEffectWrapper({
  children,
  effectStyle,
  roundedStyle,
  ...props
}: GlassEffectWrapperProps) {
  return (
    <div
      className={`flex-shrink-0 ${effectStyle || ''} ${roundedStyle || ''} ${props.className || ''}`}
    >
      {children}
    </div>
  );
}
