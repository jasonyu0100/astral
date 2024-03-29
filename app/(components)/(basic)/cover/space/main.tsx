import { EffectWrapper } from '@/(components)/(basic)/effect/main';
import { roundedStyles } from '@/(design)/(styles)/data';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { DivInputProps } from '@/(types)/main';

export enum SpaceCoverVariant {
  PLAIN = 'PLAIN',
  EVENT_HORIZON = 'EVENT_HORIZON',
}
interface SpaceCoverProps extends DivInputProps {
  variant?: SpaceCoverVariant;
  file: FileObj;
}

export function SpaceCover({ file, variant, ...props }: SpaceCoverProps) {
  return (
    <>
      {(variant === SpaceCoverVariant.PLAIN || variant === undefined) && (
        <img
          className={`h-[50px] w-[50px] flex-shrink-0 rounded-full`}
          src={file.src}
          alt={file.title}
        />
      )}
      {variant === SpaceCoverVariant.EVENT_HORIZON && (
        <EffectWrapper
          className={props.className}
          roundedStyle={roundedStyles['rounded-full']}
        >
          <img
            className={`h-[50px] w-[50px] flex-shrink-0 rounded-full border-[4px] border-slate-950 bg-slate-950 pt-[2px]`}
            src={file.src}
            alt={file.title}
          />
        </EffectWrapper>
      )}
    </>
  );
}
