import {
  GlassEffectWrapper,
} from '@/(components)/(glass)/effect/main';
import { roundedFx } from '@/(design)/(fx)/data';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { DivInputProps } from '@/(logic)/types/element/main';

interface ProfileCoverProps extends DivInputProps {
  file: FileObj;
}

export function ProfileCover({ file, ...props }: ProfileCoverProps) {
  return (
    <GlassEffectWrapper className={props.className} roundedFx={roundedFx['rounded-full']}>
      <img
        className={`h-[50px] w-[50px] animate-pulse-slow rounded-full`}
        src={file.src}
        alt={file.title}
      />
    </GlassEffectWrapper>
  );
}
