import { FileElem } from '@/(server)/model/elements/file/main';
import { DivInputProps } from '@/types/props/main';
import React from 'react';

export enum SpaceThumbnailVariant {
  PLAIN = 'PLAIN',
  EVENT_HORIZON = 'EVENT_HORIZON',
}
interface SpaceThumbnailElementProps extends DivInputProps {
  variant?: SpaceThumbnailVariant;
  fileElem: FileElem;
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
          className={`h-[50px] w-[50px] flex-shrink-0 rounded-full ${props.className}`}
          src={file?.src}
          alt={file?.title}
        />
      )}
      {variant === SpaceThumbnailVariant.EVENT_HORIZON && (
        <img
          className={`h-[50px] w-[50px] flex-shrink-0 rounded-full border-[2px] border-black bg-slate-950 pt-[2px] ${props.className}`}
          src={file?.src}
          alt={file?.title}
        />
      )}
    </>
  );
}
