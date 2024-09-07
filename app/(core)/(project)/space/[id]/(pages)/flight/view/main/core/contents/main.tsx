import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { SpaceFlightComments } from './comments/main';
import { SpaceFlightEmpty } from './empty/main';
import { SpaceFlightMain } from './main/main';

export function SpaceFlightContents() {
  const spotlightLightController = useContext(ContextForChapterSpotlightList);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceFlightContents.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex flex-grow flex-col'>
          {spotlightLightController.state.objId ? (
            <>
              <SpaceFlightMain />
              <SpaceFlightComments />
            </>
          ) : (
            <SpaceFlightEmpty />
          )}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
