import { SpacesChannelSearchImageryTab } from './imagery/main';
import { SpacesChannelSearchMediaTab } from './media/main';
import { SpacesChannelSearchTextTab } from './text/main';

export function SpacesChannelConstellationTabs() {
  return (
    <div className='grid w-full grid-cols-5'>
      <SpacesChannelSearchTextTab />
      <SpacesChannelSearchImageryTab />
      <SpacesChannelSearchMediaTab />
    </div>
  );
}
