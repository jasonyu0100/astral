import { FileElem } from '@/(server)/model/elements/file/main';
import { DivInputProps } from '@/props/main';
import { roundedFx } from '@/style/data';
import { GlassEffectWrapper } from '@/ui/glass/effect/main';

interface HorizonThumbnailElementProps extends DivInputProps {
  coverFx?: string;
  fileElem: FileElem;
}

export function HorizonsThumbnailElement({
  coverFx,
  fileElem: fileElem,
  ...props
}: HorizonThumbnailElementProps) {
  return (
    <GlassEffectWrapper
      className={props.className}
      roundedFx={roundedFx['rounded-full']}
    >
      <img
        className={`h-[2.5rem] w-[2.5rem] animate-pulse-slow rounded-full ${coverFx || ''}`}
        src={fileElem.src}
        alt={fileElem.title}
      />
    </GlassEffectWrapper>
  );
}
