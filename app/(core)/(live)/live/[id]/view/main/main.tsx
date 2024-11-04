import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../controller/main';
import { PublicSpaceBreadcrumbs } from './breadcrumbs/main';
import { PublicSpaceChapterHome } from './chapter/main';
import { PublicSpacePost } from './post/main';
import { PublicSpaceChapterList } from './posts/main';
import { PublicSpaceTasksView } from './tasks/main';

export function PublicSpaceMain() {
  const publicSpaceController = useContext(ContextForPublicSpace);

  return (
    <div className='flex h-full flex-grow flex-row space-x-[2rem] overflow-auto p-[2rem]'>
      <div className='flex w-full flex-col'>
        <PublicSpaceBreadcrumbs />
        {publicSpaceController.state.feedView === PublicSpaceFeedView.POSTS && (
          <PublicSpaceChapterList />
        )}
        {publicSpaceController.state.feedView === PublicSpaceFeedView.POST && (
          <>
            <PublicSpacePost />
          </>
        )}
        {publicSpaceController.state.feedView ===
          PublicSpaceFeedView.CHAPTER && <PublicSpaceChapterHome />}
      </div>
      <PublicSpaceTasksView />
    </div>
  );
}
