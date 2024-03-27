import { DivInputProps } from '@/(types)/main';

interface EffectWrapperProps extends DivInputProps {
  roundedStyle?: string;
  effectStyle?: string;
  children: React.ReactNode;
}

export function EffectWrapper({
  children,
  effectStyle,
  roundedStyle,
  ...props
}: EffectWrapperProps) {
  return (
    <div
      className={`flex-shrink-0 ${effectStyle || ''} ${roundedStyle || ''} ${props.className || ''}`}
    >
      {children}
    </div>
  );
}
