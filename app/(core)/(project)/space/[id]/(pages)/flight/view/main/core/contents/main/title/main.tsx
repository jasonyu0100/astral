import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';

export function SpaceFlightTitle() {
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  return (
    <div className='flex w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <img
          className='aspect-square h-[3rem] rounded-full'
          src={loggedInUser.dp?.src || exampleFileElem.src}
        />
        <p className='text-2xl font-bold text-slate-300'>
          {spotlightListController.state.currentObj?.title || 'Untitled'}
        </p>
      </div>
    </div>
  );
}
