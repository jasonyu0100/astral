import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { ContextForChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
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
            <div className='flex flex-col space-y-[0.5rem]'>
              {spotlightListController.state.objs.map((spotlight) => (
                <ContextForChapterSpotlightObj.Provider value={spotlight}>
                  <SpaceSpotlightSidebarReview />
                </ContextForChapterSpotlightObj.Provider>
              ))}
            </div>
            <div className='flex flex-col space-y-[0.5rem]'>
              <p className='font-bold text-slate-300'>Complete</p>
              <HorizontalDivider />
              {spotlightListController.state.objs.map((spotlight) => (
                <ContextForChapterSpotlightObj.Provider value={spotlight}>
                  <SpaceSpotlightSidebarReview />
                </ContextForChapterSpotlightObj.Provider>
              ))}
            </div>
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
