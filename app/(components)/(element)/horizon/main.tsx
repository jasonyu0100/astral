import {
  GlowWrapperStyle,
  GlassEffectWrapper,
} from '@/(components)/(glass)/effect/main';
import { roundedStyles } from '@/(design)/(styles)/data';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { DivInputProps } from '@/(types)/main';

interface HorizonCoverProps extends DivInputProps {
    file: FileObj;
}

export function HorizonCover({ file, ...props }: HorizonCoverProps) {
  return (
    <GlassEffectWrapper className={props.className} roundedStyle={roundedStyles['rounded-full']}>
      <img
        className={`h-[50px] w-[50px] animate-pulse-slow rounded-full`}
        src={file.src}
        alt={file.title}
      />
    </GlassEffectWrapper>
  );
}
