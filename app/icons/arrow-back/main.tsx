import { SvgInputProps } from '@/props/main';
import { cn } from '@/utils/cn';

export function AstralArrowBackIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={cn(
        'h-[1.5rem] w-[1.5rem]  cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
    >
      <path d='m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z' />
    </svg>
  );
}
