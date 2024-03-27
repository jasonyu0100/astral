import {
  GlowWrapperStyle,
  EffectWrapper,
} from '@/(components)/(basic)/effect/main';
import { roundedStyles } from '@/(design)/(styles)/data';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { DivInputProps } from '@/(types)/main';

interface SpaceCoverProps extends DivInputProps {
    file: FileObj;
}

export function SpaceCover({ file, ...props }: SpaceCoverProps) {
  return (
    <EffectWrapper className={props.className} roundedStyle={roundedStyles['rounded-full']}>
      <img
        className={`h-[50px] w-[50px] rounded-full border-[4px] border-slate-950 bg-slate-950 pt-[2px] flex-shrink-0`}
        src={file.src}
        alt={file.title}
      />
    </EffectWrapper>
  );
}
