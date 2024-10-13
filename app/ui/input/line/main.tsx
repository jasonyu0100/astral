import { FormInputProps } from '@/props/main';
import { cn } from '@/utils/cn';

export function AstralTextLineInput({ ...props }: FormInputProps) {
  return (
    <input
      {...props}
      className={cn(
        `h-[5rem] flex-shrink-0 flex-grow border-b border-slate-300  border-opacity-30 bg-transparent text-xl font-bold text-slate-300 outline-none ${props.className}`,
      )}
    />
  );
}
