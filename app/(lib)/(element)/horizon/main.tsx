import { GlassEffectWrapper } from '@/(lib)/(glass)/effect/main';
import { roundedFx } from '@/(fx)/data';
import { FileObj } from '@/(types)/model/resource/file/main';
import { DivInputProps } from '@/(types)/element/main';

interface HorizonCoverProps extends DivInputProps {
  coverFx?: string;
  file: FileObj;
}

export function HorizonCover({ coverFx, file, ...props }: HorizonCoverProps) {
  return (
    <GlassEffectWrapper
      className={props.className}
      roundedFx={roundedFx['rounded-full']}
    >
      <img
        className={`h-[50px] w-[50px] animate-pulse-slow rounded-full ${coverFx || ''}`}
        src={file.src}
        alt={file.title}
      />
    </GlassEffectWrapper>
  );
}
