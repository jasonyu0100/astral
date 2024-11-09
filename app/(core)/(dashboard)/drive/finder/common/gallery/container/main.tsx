import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { DivInputProps } from '@/props/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function DriveFinderGalleryContainer({
  onClick,
  children,
  ...props
}: InputProps) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx.rounded}
      name={DriveFinderGalleryContainer.name}
      className={ctwn(`aspect-[3/2] w-full`, props.className)}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex flex-col' onClick={onClick}>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-20']} />
    </GlassWindowFrame>
  );
}
