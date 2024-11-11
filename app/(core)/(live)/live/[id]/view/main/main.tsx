import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../controller/main';
import { PublicSpaceBreadcrumbs } from './breadcrumbs/main';
import { PublicSpaceChapterChannel } from './channel/main';
import { PublicSpacePost } from './post/main';
import { PublicSpaceChapterList } from './posts/main';

export function PublicSpaceMain() {
  const publicSpaceController = useContext(ContextForPublicSpace);

  return (
    <div className='flex h-full flex-grow flex-col overflow-auto p-[2rem]'>
      <PublicSpaceBreadcrumbs />
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POSTS && (
        <PublicSpaceChapterList />
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POST && (
        <>
          <PublicSpacePost />
        </>
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.CHAT && (
        <PublicSpaceChapterChannel />
      )}
    </div>
  );
}
