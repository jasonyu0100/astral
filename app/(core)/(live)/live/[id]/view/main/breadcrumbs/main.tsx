import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../../controller/main';
import { PublicSpaceBreadcrumbsChat } from './chat/main';
import { PublicSpaceBreadcrumbsFocus } from './focus/main';
import { PublicSpaceBreadcrumbsPost } from './post/main';
import { PublicSpaceBreadcrumbsPosts } from './posts/main';

export function PublicSpaceBreadcrumbs() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useContext(ContextForUserMain);

  return (
    <div className='flex h-[3rem] flex-shrink-0 flex-col justify-between'>
      {publicSpaceController.state.feedView === PublicSpaceFeedView.CHAT && (
        <PublicSpaceBreadcrumbsChat />
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POST && (
        <PublicSpaceBreadcrumbsPost />
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POSTS && (
        <PublicSpaceBreadcrumbsPosts />
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.FOCUS && (
        <PublicSpaceBreadcrumbsFocus />
      )}
      <HorizontalDivider />
    </div>
  );
}
