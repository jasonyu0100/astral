import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { DivInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ResourceContainer({ children, onClick, ...props }: InputProps) {
  return (
    <GlassWindowFrame className={ctwn(`aspect-square w-full`, props.className)}>
      <GlassWindowContents
        onClick={onClick}
        className={`flex w-full cursor-pointer flex-col items-center justify-center`}
      >
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
