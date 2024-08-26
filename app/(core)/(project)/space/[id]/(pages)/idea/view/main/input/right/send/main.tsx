import { ButtonInputProps } from '@/types/props/main';
import { ChatSendIcon } from '../../../../../common/icons/send/main';

export function SpaceIdeaInputRightSend({ ...props }: ButtonInputProps) {
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      {...props}
    >
      <ChatSendIcon />
    </button>
  );
}
