import { ButtonInputProps } from '@/(lgx)/types/element/main';
import { StormSendIcon } from '../../../../icons/send/main';

export function StormMessageInputSend({ ...props }: ButtonInputProps) {
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      {...props}
    >
      <StormSendIcon />
    </button>
  );
}
