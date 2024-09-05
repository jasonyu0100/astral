import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { useContext } from 'react';

export function SpaceSpotlightSidebarReview() {
  const spotlight = useContext(ContextForChapterSpotlightObj);
  const spotlightListController = useContext(ContextForChapterSpotlightList);

  return (
    <div
      className='flex h-[70px] w-full cursor-pointer flex-row items-center space-x-[1rem] overflow-hidden'
      onClick={() =>
        spotlightListController.actions.stateActions.select(spotlight)
      }
    >
      <img
        src={exampleFileElem.src}
        className='aspect-square h-[3rem] w-[3rem] flex-shrink-0 rounded-full'
      />
      <p className='text-sm font-bold text-slate-500'>{spotlight.title}</p>
    </div>
  );
}
