import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { DivInputProps } from '@/(types)/props/main';
import { cn } from '@/lib/utils';

interface InputProps extends DivInputProps {
  children?: React.ReactNode;
}

export function GalleryContainer({ children, ...props }: InputProps) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded-xs']}
      name={GalleryContainer.name}
      className={cn(
        `aspect-[11/16] w-full`,
        props.className,
      )}
    >
      <GlassWindowContents className='flex flex-col'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
