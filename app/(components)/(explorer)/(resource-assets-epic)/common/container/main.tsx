import { DivInputProps } from '@/(types)/props/main';
import { cn } from '@/(utils)/cn';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function ResourceContainer({ children, ...props }: InputProps) {
  return (
    <div
      className={cn(`flex aspect-[13/16] h-[300px] flex-shrink-0 cursor-pointer flex-col items-center overflow-hidden bg-stone-100 p-[20px]`, props.className)}
    >
      {children}
    </div>
  );
}
