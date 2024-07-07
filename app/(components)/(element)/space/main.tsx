import { FileElem } from '@/(server)/(model)/elements/file/main';
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
      {(variant === SpaceCoverVariant.PLAIN || variant === undefined) && (
        <img
          className={`h-[50px] w-[50px] flex-shrink-0 rounded-full ${props.className}`}
          src={file?.src}
          alt={file?.title}
        />
      )}
      {variant === SpaceCoverVariant.EVENT_HORIZON && (
        <img
          className={`h-[50px] w-[50px] flex-shrink-0 rounded-full bg-slate-100 ${props.className}`}
          src={file?.src}
          alt={file?.title}
        />
      )}
    </>
  );
}
