import { FileElem } from '@/(server)/model/elements/file/main';
import { roundedFx } from '@/style/data';
import { DivInputProps } from '@/types/props/main';
import { GlassEffectWrapper } from '@/ui/(glass)/effect/main';

interface HorizonCoverProps extends DivInputProps {
  coverFx?: string;
  fileElem: FileElem;
}

export function HorizonCover({
  coverFx,
  fileElem: fileElem,
  ...props
}: HorizonCoverProps) {
  return (
    <GlassEffectWrapper
      className={props.className}
      roundedFx={roundedFx['rounded-full']}
    >
      <img
        className={`h-[50px] w-[50px] animate-pulse-slow rounded-full ${coverFx || ''}`}
        src={fileElem.src}
        alt={fileElem.title}
      />
    </GlassEffectWrapper>
  );
}
