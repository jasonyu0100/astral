import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesChannelContents } from './contents/main';
import { SpacesChannelHeader } from './header/main';

export function SpacesChannelCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpacesChannelCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpacesChannelHeader />
        <SpacesChannelContents />
      </GlassAreaContainer>
    </div>
  );
}
