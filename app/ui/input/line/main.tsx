import { FormInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralTextLineInput({ ...props }: FormInputProps) {
  return (
    <input
      {...props}
      className={ctwn(
        `h-[5rem] flex-shrink-0 flex-grow border-b border-slate-300  border-opacity-30 bg-transparent text-xl font-bold text-slate-300 outline-none ${props.className}`,
      )}
    />
  );
}
