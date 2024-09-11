import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { ContextForChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { SpacesFlightSidebarItem } from './item/main';

export function SpacesFlightSidebarList() {
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GlassAreaContainer
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto p-[1rem]'
        name={''}
      >
        <div className='h-full w-full overflow-auto  pr-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            {spotlightListController.state.more.queryResults.map(
              (spotlight) => (
                <ContextForChapterSpotlightObj.Provider value={spotlight}>
                  <SpacesFlightSidebarItem />
                </ContextForChapterSpotlightObj.Provider>
              ),
            )}
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
