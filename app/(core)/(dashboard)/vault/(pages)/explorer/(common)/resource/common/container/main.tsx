import { DivInputProps } from '@/types/props/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { cn } from '@/utils/cn';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ResourceContainer({ children, onClick, ...props }: InputProps) {
  return (
    <GlassWindowFrame className={cn(`aspect-square w-full`, props.className)}>
      <GlassWindowContents
        onClick={onClick}
        className={`flex w-full cursor-pointer flex-col items-center justify-center`}
      >
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
