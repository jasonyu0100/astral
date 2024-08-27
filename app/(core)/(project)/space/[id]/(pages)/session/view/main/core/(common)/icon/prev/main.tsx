import { AstralArrowBackIcon } from '@/icons/arrow-back/main';
import { ButtonInputProps } from '@/types/props/main';

export function SpaceSessionEditPrev({ ...props }: ButtonInputProps) {
  return (
    <button
      className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'
      {...props}
    >
      <AstralArrowBackIcon />
    </button>
  );
}
