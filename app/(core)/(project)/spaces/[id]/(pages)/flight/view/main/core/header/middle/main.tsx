import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';

export function SpacesFlightHeaderMiddle() {
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        review - {spotlightListController.state?.currentObj?.title || 'None'}
      </p>
      <AstralChevronRightIcon />
    </div>
  );
}
