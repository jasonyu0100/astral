import { cn } from '@/lib/utils';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { DivInputProps } from '@/types/props/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function GalleryContainer({ onClick, children, ...props }: InputProps) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx.rounded}
      name={GalleryContainer.name}
      className={cn(`aspect-[3/2] w-full`, props.className)}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex flex-col' onClick={onClick}>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
