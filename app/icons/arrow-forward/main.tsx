import { SvgInputProps } from '@/types/props/main';
import { cn } from '@/utils/cn';

export function AstralArrowForwardIcon({ ...props }: SvgInputProps) {
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
      <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
    </svg>
  );
}
