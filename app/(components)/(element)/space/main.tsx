import { GlassEffectWrapper } from '@/(components)/(glass)/effect/main';
import { roundedFx } from '@/(style)/data';
import { FileObj } from '@/(types)/model/resource/file/main';
import { DivInputProps } from '@/(types)/element/main';

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
        <GlassEffectWrapper
          className={props.className}
          roundedFx={roundedFx['rounded-full']}
        >
          <img
            className={`h-[50px] w-[50px] flex-shrink-0 rounded-full border-[4px] border-slate-950 bg-slate-950 pt-[2px]`}
            src={file.src}
            alt={file.title}
          />
        </GlassEffectWrapper>
      )}
    </>
  );
}
