import { ButtonInputProps } from '@/(types)/props/main';
import { StormSendIcon } from '../../../../../(common)/icons/send/main';

export function SpaceStormInputRightSend({ ...props }: ButtonInputProps) {
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      {...props}
    >
      <StormSendIcon />
    </button>
  );
}
