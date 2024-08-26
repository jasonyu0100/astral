import { DivInputProps } from '@/types/props/main';

interface GlassPaneProps extends DivInputProps {
  glassFx?: string;
}

export function GlassWindowPane({
  glassFx: glassFx,
  ...props
}: GlassPaneProps) {
  return (
    <div
      className={`absolute left-0 top-0 h-full w-full flex-shrink-0 ${glassFx} ${props.className}`}
    ></div>
  );
}
