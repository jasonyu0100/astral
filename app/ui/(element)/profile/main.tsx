import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { DivInputProps } from '@/types/props/main';

interface ProfileCoverProps extends DivInputProps {
  coverFx?: string;
  fileElem: FileElem;
}

export function ProfileCover({
  coverFx,
  fileElem,
  ...props
}: ProfileCoverProps) {
  return (
    <img
      className={`h-[50px] w-[50px] flex-shrink-0 rounded-full ${coverFx || ''} ${props.className}`}
      src={fileElem?.src || exampleFileElem.src}
      alt={fileElem?.title}
    />
  );
}
