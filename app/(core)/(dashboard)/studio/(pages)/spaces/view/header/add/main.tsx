import { ButtonInputProps } from '@/(types)/props/main';
import { SpacesDraftIcon } from '../icon/flow/main';

export function SpacesHeaderAdd({ ...props }: ButtonInputProps) {
  return (
    <button
      className='ml-[6rem] flex h-[80px] w-[150px] flex-col items-center justify-center rounded-[50px] bg-violet-500'
      {...props}
    >
      <SpacesDraftIcon />
    </button>
  );
}
