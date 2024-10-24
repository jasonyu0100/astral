import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesChatContents } from './contents/main';
import { SpacesChatHeader } from './header/main';

export function SpacesChatCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpacesChatCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpacesChatHeader />
        <SpacesChatContents />
      </GlassAreaContainer>
    </div>
  );
}
