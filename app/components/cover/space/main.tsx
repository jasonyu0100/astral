import { DivInputProps } from '@/props/main';
import { FileElement } from '@/server/model/elements/file/main';

export enum SpaceThumbnailVariant {
  PLAIN = 'PLAIN',
  EVENT_HORIZON = 'EVENT_HORIZON',
}
interface SpaceThumbnailElementProps extends DivInputProps {
  variant?: SpaceThumbnailVariant;
  fileElem: FileElement;
}

export function SpaceThumbnailElement({
  fileElem: file,
  variant,
  ...props
}: SpaceThumbnailElementProps) {
  return (
    <>
      {(variant === SpaceThumbnailVariant.PLAIN || variant === undefined) && (
        <img
          className={`h-[2.5rem] w-[2.5rem] flex-shrink-0 rounded-full ${props.className}`}
          src={file?.src}
          alt={file?.title}
        />
      )}
      {variant === SpaceThumbnailVariant.EVENT_HORIZON && (
        <img
          className={`h-[2.5rem] w-[2.5rem] flex-shrink-0 rounded-full border-[2px] border-black bg-slate-950 pt-[2px] ${props.className}`}
          src={file?.src}
          alt={file?.title}
        />
      )}
    </>
  );
}
