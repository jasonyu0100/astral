import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';

export function SpaceFlightHeaderMiddle() {
  const spotlightListController = useContext(ContextForChapterSpotlightList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        review - {spotlightListController.state?.currentObj?.title || 'None'}
      </p>
      <AstralChevronRightIcon />
    </div>
  );
}
