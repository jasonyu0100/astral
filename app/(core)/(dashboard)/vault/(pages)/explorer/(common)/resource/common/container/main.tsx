import { borderFx, roundedFx } from '@/style/data';
import { DivInputProps } from '@/types/props/main';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { cn } from '@/utils/cn';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ResourceContainer({ children, onClick, ...props }: InputProps) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx.rounded}
      className={cn(`flex cursor-pointer flex-col`, props.className)}
    >
      <GlassWindowContents onClick={onClick}>{children}</GlassWindowContents>
    </GlassWindowFrame>
  );
  return (
    <GlassWindowFrame
      className={cn(
        `flex-shrink-0 cursor-pointer overflow-hidden bg-stone-100`,
        props.className,
      )}
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        className={cn(`flex flex-col items-center`)}
        onClick={onClick}
      >
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
