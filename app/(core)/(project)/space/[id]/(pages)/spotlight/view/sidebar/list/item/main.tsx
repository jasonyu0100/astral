import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { useContext } from 'react';

export function SpaceSpotlightSidebarReview() {
  const spotlight = useContext(ContextForChapterSpotlightObj);
  const spotlightListController = useContext(ContextForChapterSpotlightList);

  return (
    <div
      className='flex h-[70px] w-full cursor-pointer flex-row items-center space-x-[2rem]'
      onClick={() =>
        spotlightListController.actions.stateActions.select(spotlight)
      }
    >
      <img src={exampleFileElem.src} className='aspect-square h-full rounded' />
      <div className='flex flex-col'>
        <p className='text-md font-bold text-white'>{spotlight.title}</p>
        <p className='text-sm text-white'>{spotlight.description}</p>
      </div>
    </div>
  );
}
