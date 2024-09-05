import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { SpaceSpotlightComments } from './comments/main';
import { SpaceSpotlightEmpty } from './empty/main';
import { SpaceSpotlightMain } from './main/main';

export function SpaceSpotlightContents() {
  const spotlightLightController = useContext(ContextForChapterSpotlightList);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceSpotlightContents.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex flex-grow flex-col'>
          {spotlightLightController.state.objId ? (
            <>
              <SpaceSpotlightMain />
              <SpaceSpotlightComments />
            </>
          ) : (
            <SpaceSpotlightEmpty />
          )}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
