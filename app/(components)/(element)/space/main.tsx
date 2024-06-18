import { GlassEffectWrapper } from '@/(components)/(glass)/effect/main';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { roundedFx } from '@/(style)/data';
import { DivInputProps } from '@/(types)/props/main';

export enum SpaceCoverVariant {
  PLAIN = 'PLAIN',
  EVENT_HORIZON = 'EVENT_HORIZON',
}
interface SpaceCoverProps extends DivInputProps {
  variant?: SpaceCoverVariant;
  fileElem: FileElem;
}

export function SpaceCover({
  fileElem: file,
  variant,
  ...props
}: SpaceCoverProps) {
  return (
    <>
      <GlassEffectWrapper
        className={props.className}
        roundedFx={roundedFx['rounded-full']}
      >
        {(variant === SpaceCoverVariant.PLAIN || variant === undefined) && (
          <img
            className={`h-[50px] w-[50px] flex-shrink-0 rounded-full`}
            src={file.src}
            alt={file.title}
          />
        )}
        {variant === SpaceCoverVariant.EVENT_HORIZON && (
          <img
            className={`h-[50px] w-[50px] flex-shrink-0 rounded-full border-[4px] border-slate-950 bg-slate-950 pt-[2px]`}
            src={file.src}
            alt={file.title}
          />
        )}
      </GlassEffectWrapper>
    </>
  );
}
