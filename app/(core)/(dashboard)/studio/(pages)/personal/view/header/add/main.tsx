import { AstralGestureIcon } from '@/icons/gesture/main';
import { ButtonInputProps } from '@/types/props/main';

export function StudioSpacesHeaderAdd({ ...props }: ButtonInputProps) {
  return (
    <button
      className='ml-[6rem] flex h-[80px] w-[150px] flex-col items-center justify-center rounded-[50px] bg-violet-500'
      {...props}
    >
      <AstralGestureIcon className='h-1/2 w-1/2' />
    </button>
  );
}
