import { FileElem } from '@/(server)/(model)/elements/file/main';
import { DivInputProps } from '@/(types)/props/main';

interface ProfileCoverProps extends DivInputProps {
  coverFx?: string;
  fileElem: FileElem;
}

export function ProfileCover({
  coverFx,
  fileElem: fileElem,
  ...props
}: ProfileCoverProps) {
  return (
    <img
      className={`h-[50px] w-[50px] animate-pulse-slow rounded-full ${coverFx || ''}`}
      src={fileElem.src}
      alt={fileElem.title}
    />
  );
}
