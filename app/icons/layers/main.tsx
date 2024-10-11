import { SvgInputProps } from '@/props/main';
import { cn } from '@/utils/cn';

export function AstralLayersIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={cn(
        'h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
    >
      <path d='M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z' />
    </svg>
  );
}
