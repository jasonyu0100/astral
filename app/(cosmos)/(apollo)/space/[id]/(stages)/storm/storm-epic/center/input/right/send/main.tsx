import { ButtonInputProps } from '@/(common)/types/main';
import { StormSendIcon } from '../../../../icons/send/main';

export function StormMessageInputSend({ ...props }: ButtonInputProps) {
  return (
    <button
      className='w-[40px] h-[40px] flex items-center bg-blue-500 justify-center rounded-[2rem]'
      {...props}
    >
      <StormSendIcon />
    </button>
  );
}
