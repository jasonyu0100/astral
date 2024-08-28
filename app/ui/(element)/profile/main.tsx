import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { DivInputProps } from '@/types/props/main';
import { cn } from '@/utils/cn';
import React from 'react';

interface UserDpElementProps extends DivInputProps {
  coverFx?: string;
  fileElem: FileElem;
}

export function UserDpElement({
  coverFx,
  fileElem,
  ...props
}: UserDpElementProps) {
  return (
    <img
      className={cn(
        `h-[50px] w-[50px] flex-shrink-0 rounded-full shadow-glow`,
        `${coverFx || ''} ${props.className}`,
      )}
      src={fileElem?.src || exampleFileElem.src}
      alt={fileElem?.title}
    />
  );
}
