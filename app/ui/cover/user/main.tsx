import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { DivInputProps } from '@/types/props/main';
import { cn } from '@/utils/cn';

interface UserDpElementProps extends DivInputProps {
  fileElem: FileElem;
}

export function UserDisplayPictureElement({
  fileElem,
  ...props
}: UserDpElementProps) {
  return (
    <img
      className={cn(
        `h-[50px] w-[50px] flex-shrink-0 rounded-full shadow-glow`,
        props.className,
      )}
      src={fileElem?.src || exampleFileElem.src}
      alt={fileElem?.title}
    />
  );
}
