import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { ContextForChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { SpaceSpotlightSidebarReview } from './item/main';

export function SpaceSpotlightSidebarList() {
  const spotlightListController = useContext(ContextForChapterSpotlightList);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GlassAreaContainer
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto p-[1rem]'
        name={''}
      >
        <div className='h-full w-full overflow-auto  pr-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            {spotlightListController.state.objs.map((spotlight) => (
              <ContextForChapterSpotlightObj.Provider value={spotlight}>
                <SpaceSpotlightSidebarReview />
              </ContextForChapterSpotlightObj.Provider>
            ))}
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
