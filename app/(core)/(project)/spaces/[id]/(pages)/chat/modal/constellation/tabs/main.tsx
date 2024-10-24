import { SpacesChatSearchArticlesTab } from './articles/main';
import { SpacesChatSearchImageryTab } from './imagery/main';
import { SpacesChatSearchMediaTab } from './media/main';
import { SpacesChatSearchTextTab } from './text/main';

export function SpacesChatConstellationTabs() {
  return (
    <div className='flex flex-row p-[2rem]'>
      <div className='grid w-full grid-cols-5'>
        <SpacesChatSearchTextTab />
        <SpacesChatSearchArticlesTab />
        <SpacesChatSearchImageryTab />
        <SpacesChatSearchMediaTab />
      </div>
    </div>
  );
}
