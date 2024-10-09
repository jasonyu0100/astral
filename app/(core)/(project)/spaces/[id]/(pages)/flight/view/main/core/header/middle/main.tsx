import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';

export function SpacesFlightHeaderMiddle() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        review - {postListController.state?.currentObj?.title || 'None'}
      </p>
      <AstralChevronRightIcon />
    </div>
  );
}
