import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { roundedFx } from '@/(style)/data';
import { DivInputProps } from '@/(types)/props/main';
import { cn } from '@/(utils)/cn';

interface InputProps extends DivInputProps {
  children?: React.ReactNode;
}

export function ResourceContainer({ children, ...props }: InputProps) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded-xs']}
      className={cn(
        `aspect-[13/16] h-[100px] flex-shrink-0 cursor-pointer overflow-hidden bg-stone-100 p-[20px]`,
        props.className,
      )}
    >
      <GlassWindowContents className={cn(`flex flex-col items-center`)}>
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
