import { AstralGestureIcon } from '@/icons/gesture/main';
import { ButtonInputProps } from '@/props/main';

export function StudioSpacesHeaderAdd({ ...props }: ButtonInputProps) {
  return (
    <button
      className='ml-[3rem] flex h-[80px] w-[150px] animate-pulse-slow flex-col items-center justify-center rounded-[50px] bg-violet-500 shadow-glow'
      {...props}
    >
      <AstralGestureIcon className='h-1/2 w-1/2' />
    </button>
  );
}
