import { ButtonInputProps } from '@/(types)/main';
import { MovesActionIcon } from './icon/flow/main';

export function MovesActionButton({ ...props }: ButtonInputProps) {
  return (
    <button
      className='ml-[5rem] flex h-[80px] w-[150px] flex-col items-center justify-center rounded-[50px] bg-violet-500'
      {...props}
    >
      <MovesActionIcon />
    </button>
  );
}
