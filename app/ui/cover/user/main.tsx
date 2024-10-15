import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { DivInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

interface UserDpElementProps extends DivInputProps {
  fileElem: FileElem;
}

export function UserDisplayPictureElement({
  fileElem,
  ...props
}: UserDpElementProps) {
  return (
    <img
      className={ctwn(
        `h-[2.5rem] w-[2.5rem] flex-shrink-0 rounded-full shadow-glow`,
        props.className,
      )}
      src={fileElem?.src || exampleFileElem.src}
      alt={fileElem?.title}
    />
  );
}
