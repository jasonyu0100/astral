import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForUserMain } from '@/server/controller/user/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForPublicSpace, PublicSpacePage } from '../../../../page';
import { PublicSpacePageKarma } from './karma/main';

export function PublicSpaceDescription() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const userMainController = useContext(ContextForUserMain);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const publicSpaceController = useContext(ContextForPublicSpace);

  return (
    <>
      <h1 className='text-2xl font-bold text-slate-300'>
        <span
          className='cursor-pointer text-2xl font-bold text-slate-300'
          onClick={() => {
            publicSpaceController.actions.updatePage(PublicSpacePage.SPACE);
          }}
        >
          Home /{' '}
        </span>
        {chapterListController.state.currentObj?.title}
      </h1>
      <HorizontalDivider />
      <div className='flex w-full flex-row items-center space-x-[1rem]'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <div className='flex w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <img
                className='aspect-square h-[3rem] rounded-full'
                src={
                  userMainController.state.obj?.dp?.src ||
                  exampleFileElement.src
                }
              />
              <p className='text-2xl font-bold text-slate-300'>
                {postListController.state.currentObj?.title?.trim() ||
                  'Untitled'}
              </p>
            </div>
          </div>
          <p className='text-lg font-bold text-slate-300'>
            {postListController.state.currentObj?.description}
          </p>
        </div>
        <PublicSpacePageKarma />
      </div>
      <div className='space-y-[0.5rem]'>
        <p className=' text-sm font-light text-white'>
          {getFormattedDate(
            new Date(postListController.state.currentObj?.created ?? ''),
          )}
        </p>
      </div>
    </>
  );
}
