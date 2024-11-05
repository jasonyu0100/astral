import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForSpacesTable,
  SpacesTableFeedView,
} from '../../../../../controller/main';

export function SpacesTableBreadcrumbs() {
  const spacesTableController = useContext(ContextForSpacesTable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex h-[3rem] flex-shrink-0 flex-col justify-between'>
      {spacesTableController.state.feedView === SpacesTableFeedView.POST && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesTableController.actions.updateFeedView(
                  SpacesTableFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesTableController.actions.updateFeedView(
                  SpacesTableFeedView.POST,
                );
              }}
            >
              {postListController.state.currentObj?.title}
            </p>
          </div>
        </>
      )}
      {spacesTableController.state.feedView === SpacesTableFeedView.CHAPTER && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesTableController.actions.updateFeedView(
                  SpacesTableFeedView.CHAPTER,
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
