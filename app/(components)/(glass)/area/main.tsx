import { DivInputProps } from '@/(types)/props/main';
import { GlassAreaContents } from './contents/main';
import { GlassAreaPane } from './pane/main';

interface GlassAreaProps extends DivInputProps {
  name: string;
  sizeFx?: string;
  glassFx?: string;
  borderFx?: string;
  roundedFx?: string;
  children?: React.ReactNode;
}

export function GlassAreaContainer({
  name,
  sizeFx: sizeFx,
  glassFx: glassFx,
  borderFx: borderFx,
  roundedFx: roundedFx,
  children,
  ...props
}: GlassAreaProps) {
  return (
    <div
      id={name}
      className={`relative flex-shrink-0 ${sizeFx || 'h-full w-full'} ${
        borderFx || ''
      } ${roundedFx || ''}`}
    >
      <GlassAreaPane glassFx={glassFx || ''} />
      <GlassAreaContents {...props}>{children}</GlassAreaContents>
    </div>
  );
}
