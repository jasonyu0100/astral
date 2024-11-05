import { SpacesChannelSearchArticlesTab } from './articles/main';
import { SpacesChannelSearchImageryTab } from './imagery/main';
import { SpacesChannelSearchMediaTab } from './media/main';
import { SpacesChannelSearchTextTab } from './text/main';

export function SpacesChannelConstellationTabs() {
  return (
    <div className='flex flex-row p-[2rem]'>
      <div className='grid w-full grid-cols-5'>
        <SpacesChannelSearchTextTab />
        <SpacesChannelSearchArticlesTab />
        <SpacesChannelSearchImageryTab />
        <SpacesChannelSearchMediaTab />
      </div>
    </div>
  );
}
