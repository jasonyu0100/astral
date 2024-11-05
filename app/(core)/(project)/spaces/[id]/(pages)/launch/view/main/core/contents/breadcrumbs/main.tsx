import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForSpacesLaunch,
  SpacesLaunchFeedView,
} from '../../../../../controller/main';

export function SpacesLaunchBreadcrumbs() {
  const spacesLaunchController = useContext(ContextForSpacesLaunch);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex h-[3rem] flex-shrink-0 flex-col justify-between'>
      {spacesLaunchController.state.feedView === SpacesLaunchFeedView.POST && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesLaunchController.actions.updateFeedView(
                  SpacesLaunchFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesLaunchController.actions.updateFeedView(
                  SpacesLaunchFeedView.POST,
                );
              }}
            >
              {postListController.state.currentObj?.title}
            </p>
          </div>
        </>
      )}
      {spacesLaunchController.state.feedView ===
        SpacesLaunchFeedView.CHAPTER && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesLaunchController.actions.updateFeedView(
                  SpacesLaunchFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
          </div>
        </>
      )}
      <HorizontalDivider />
    </div>
  );
}
