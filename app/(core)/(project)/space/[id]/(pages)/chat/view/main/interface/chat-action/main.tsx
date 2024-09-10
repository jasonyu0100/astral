import { SpaceChatInputRightSend } from './send/main';

export function SpaceChatInputRight() {
  return (
    <div className='flex h-[50px] w-[200px] flex-shrink-0 flex-row items-center justify-start'>
      <SpaceChatInputRightSend />
    </div>
  );
}
