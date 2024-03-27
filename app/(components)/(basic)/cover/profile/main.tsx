import {
  GlowWrapperStyle,
  EffectWrapper,
} from '@/(components)/(basic)/effect/main';
import { roundedStyles } from '@/(design)/(styles)/data';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { DivInputProps } from '@/(types)/main';

interface ProfileCoverProps extends DivInputProps {
  file: FileObj;
}

export function ProfileCover({ file, ...props }: ProfileCoverProps) {
  return (
    <EffectWrapper className={props.className} roundedStyle={roundedStyles['rounded-full']}>
      <img
        className={`h-[50px] w-[50px] animate-pulse-slow rounded-full`}
        src={file.src}
        alt={file.title}
      />
    </EffectWrapper>
  );
}
