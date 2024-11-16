import { SpacesChatSearchImageryTab } from './imagery/main';
import { SpacesChatSearchMediaTab } from './media/main';
import { SpacesChatSearchTextTab } from './text/main';

export function SpacesChatConstellationTabs() {
  return (
    <div className='grid w-full grid-cols-5'>
      <SpacesChatSearchTextTab />
      <SpacesChatSearchImageryTab />
      <SpacesChatSearchMediaTab />
    </div>
  );
}
