import { DivInputProps } from '@/(types)/main';
import { GlassAreaContents } from './contents/main';
import { GlassAreaPane } from './pane/main';

interface GlassAreaProps extends DivInputProps {
  displayName: string;
  sizeStyle?: string;
  contentStyle?: string;
  glassStyle?: string;
  borderStyle?: string;
  roundedStyle?: string;
  children?: React.ReactNode;
}

export function GlassAreaContainer({
  displayName,
  sizeStyle,
  glassStyle,
  borderStyle,
  roundedStyle,
  children,
  ...props
}: GlassAreaProps) {
  return (
    <div
      id={displayName}
      className={`relative flex-shrink-0 ${sizeStyle || 'h-full w-full'} ${
        borderStyle || ''
      } ${roundedStyle || ''}`}
    >
      <GlassAreaPane
        glassStyle={glassStyle || ''}
      />
      <GlassAreaContents {...props}>{children}</GlassAreaContents>
    </div>
  );
}
