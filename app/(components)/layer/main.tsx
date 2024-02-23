import { DivInputProps } from '../types/main';

interface GlassContentProps extends DivInputProps {
  contentStyle?: string;
  children: React.ReactNode;
}

function GlassContent({ children, ...props }: GlassContentProps) {
  return (
    <div
      {...props}
      className={`absolute top-0 h-full w-full ${props.className || ''}`}
    >
      {children}
    </div>
  );
}

interface GlassBackgroundProps {
  backgroundStyle?: string;
  effectStyle?: string;
}

function GlassBackground({
  backgroundStyle,
  effectStyle,
}: GlassBackgroundProps) {
  return (
    <div
      className={`h-full w-full flex-shrink-0 ${backgroundStyle} ${effectStyle}`}
    ></div>
  );
}

interface GlassProps extends DivInputProps {
  displayName: string;
  sizeStyle?: string;
  contentStyle?: string;
  backgroundStyle?: string;
  effectStyle?: string;
  borderStyle?: string;
  children?: React.ReactNode;
}

export function Glass({
  displayName,
  sizeStyle,
  backgroundStyle,
  effectStyle,
  borderStyle,
  children,
  ...props
}: GlassProps) {
  return (
    <div
      id={displayName}
      className={`relative flex-shrink-0 ${sizeStyle || 'h-full w-full'} ${
        borderStyle || ''
      }`}
    >
      <GlassBackground
        backgroundStyle={backgroundStyle || ''}
        effectStyle={effectStyle || ''}
      />
      <GlassContent {...props}>{children}</GlassContent>
    </div>
  );
}
