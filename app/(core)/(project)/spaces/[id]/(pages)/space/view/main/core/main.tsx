import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesSpaceContents } from './contents/main';
import { SpacesSpaceHeader } from './header/main';

export function SpacesSpaceCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpacesSpaceCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpacesSpaceHeader />
        <SpacesSpaceContents />
      </GlassAreaContainer>
    </div>
  );
}
