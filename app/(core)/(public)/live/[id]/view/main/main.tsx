import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../controller/main';
import { PublicSpaceBreadcrumbs } from './breadcrumbs/main';
import { PublicSpaceChapterList } from './chapter/main';
import { PublicSpacePost } from './post/main';

export function PublicSpaceMain() {
  const publicSpaceController = useContext(ContextForPublicSpace);

  return (
    <div className='flex h-full flex-grow flex-col space-y-[2rem] py-[4rem]'>
      <PublicSpaceBreadcrumbs />
      {publicSpaceController.state.feedView === PublicSpaceFeedView.CHAPTER && (
        <>
          <PublicSpaceChapterList />
        </>
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POST && (
        <>
          <PublicSpacePost />
        </>
      )}
    </div>
  );
}
