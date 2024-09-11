import { SpacesSpaceUserMessageDetail } from './detail/main';
import { SpacesSpaceUserMessageText } from './text/main';

export function SpacesSpaceUserMessage() {
  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <SpacesSpaceUserMessageDetail />
      <SpacesSpaceUserMessageText />
    </div>
  );
}
