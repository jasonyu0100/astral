import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { SpacesFlightComments } from './comments/main';
import { SpacesFlightEmpty } from './empty/main';
import { SpacesFlightMain } from './main/main';

export function SpacesFlightContents() {
  const spotlightLightController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesFlightContents.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex flex-grow flex-col'>
          {spotlightLightController.state.objId ? (
            <>
              <SpacesFlightMain />
              <SpacesFlightComments />
            </>
          ) : (
            <SpacesFlightEmpty />
          )}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
