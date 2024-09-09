import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceFlightDescription() {
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );

  return (
    <div className='flex w-full flex-col justify-between space-y-[1rem] p-[1rem]'>
      <p className='text-xl text-slate-300'>
        {spotlightListController.state.currentObj?.description ||
          'No description'}
      </p>
      <div className='space-y-[0.5rem]'>
        <p className=' text-sm font-light text-white'>
          {getFormattedDate(
            new Date(spotlightListController.state.currentObj?.created ?? ''),
          )}
        </p>
      </div>
    </div>
  );
}
