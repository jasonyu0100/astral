import { AstralDoneIcon } from '@/icons/done/main';
import { ButtonInputProps } from '@/types/props/main';

export function SpaceSessionEditDone({ ...props }: ButtonInputProps) {
  return (
    <button
      className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'
      {...props}
    >
      <AstralDoneIcon />
    </button>
  );
}
