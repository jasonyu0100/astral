import { DivInputProps } from '@/(types)/main';
import { GlassAreaContents } from './contents/main';
import { GlassAreaPane } from './pane/main';

interface GlassAreaProps extends DivInputProps {
  name: string;
  size?: string;
  glass?: string;
  border?: string;
  rounded?: string;
  children?: React.ReactNode;
}

export function GlassAreaContainer({
  name,
  size,
  glass,
  border,
  rounded,
  children,
  ...props
}: GlassAreaProps) {
  return (
    <div
      id={name}
      className={`relative flex-shrink-0 ${size || 'h-full w-full'} ${
        border || ''
      } ${rounded || ''}`}
    >
      <GlassAreaPane
        glassStyle={glass || ''}
      />
      <GlassAreaContents {...props}>{children}</GlassAreaContents>
    </div>
  );
}
