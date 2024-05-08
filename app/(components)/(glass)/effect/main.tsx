import { DivInputProps } from '@/(types)/element/main';

interface GlassEffectWrapperProps extends DivInputProps {
  roundedFx?: string;
  effectFx?: string;
  children: React.ReactNode;
}

export function GlassEffectWrapper({
  children,
  effectFx: effectFx,
  roundedFx: roundedFx,
  ...props
}: GlassEffectWrapperProps) {
  return (
    <div
      className={`flex-shrink-0 ${effectFx || ''} ${roundedFx || ''} ${props.className || ''}`}
    >
      {children}
    </div>
  );
}
