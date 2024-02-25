import { DivInputProps } from '../../../../(types)/main';
import { GlassPane } from '../pane/main';

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

interface GlassProps extends DivInputProps {
  displayName: string;
  sizeStyle?: string;
  contentStyle?: string;
  glassStyle?: string;
  borderStyle?: string;
  children?: React.ReactNode;
}

export function GlassContainer({
  displayName,
  sizeStyle,
  glassStyle,
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
      <GlassPane
        glassStyle={glassStyle || ''}
      />
      <GlassContent {...props}>{children}</GlassContent>
    </div>
  );
}
