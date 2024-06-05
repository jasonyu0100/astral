import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { roundedFx } from '@/(style)/data';
import { ButtonInputProps, DivInputProps } from '@/(types)/props/main';
import { cn } from '@/(utils)/cn';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ResourceContainer({ children, onClick, ...props }: InputProps) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded-xs']}
      className={cn(
        `aspect-[13/16] flex-shrink-0 cursor-pointer overflow-hidden bg-stone-100`,
        props.className,
      )}
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
