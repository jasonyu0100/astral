import { SpaceChatExpandIcon } from './expand/main';
import SpaceChatHeaderMiddleTitle from './title/main';

export function SpaceChatHeaderMiddle() {
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <SpaceChatHeaderMiddleTitle />
      <SpaceChatExpandIcon />
    </div>
  );
}
