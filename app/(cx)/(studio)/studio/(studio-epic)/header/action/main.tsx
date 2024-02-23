import { ButtonInputProps } from '@/(components)/types/main';
import { SpacesFlowIcon } from '../../icon/flow/main';

export function SpacesHeaderAction({ ...props }: ButtonInputProps) {
  return (
    <button
      className='ml-[5rem] flex h-[80px] w-[150px] flex-col items-center justify-center rounded-[50px] bg-violet-500'
      {...props}
    >
      <SpacesFlowIcon />
    </button>
  );
}
