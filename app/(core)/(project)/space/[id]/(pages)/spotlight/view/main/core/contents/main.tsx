import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceSpotlightComments } from './comments/main';
import { SpaceSpotlightMain } from './main/main';

export function SpaceSpotlightContents() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceSpotlightContents.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex flex-grow flex-col'>
          <SpaceSpotlightMain />
          <SpaceSpotlightComments />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
