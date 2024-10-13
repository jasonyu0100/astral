import { FormInputProps } from '@/props/main';
import { cn } from '@/utils/cn';

export function AstralTextInput({ ...props }: FormInputProps) {
  return (
    <input
      className={cn(
        `h-[5rem] w-full flex-shrink-0 border-b border-slate-300  border-opacity-30 bg-transparent text-xl font-bold text-slate-300 outline-none ${props.className}`,
      )}
      {...props}
    />
  );
}
