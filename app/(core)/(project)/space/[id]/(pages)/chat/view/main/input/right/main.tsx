import { SpaceChatInputRightSend } from './send/main';

export function SpaceChatInputRight() {
  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      <SpaceChatInputRightSend />
    </div>
  );
}
