import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '@/(core)/(live)/live/[id]/controller/main';
import { useControllerForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { useContext } from 'react';
import { PublicSpaceChapterPostDetails } from './details/main';
import { PublicSpaceChapterPostKarma } from './karma/main';
import { PublicSpaceChapterPostThumbnail } from './thumbnail/main';

export function PublicSpaceChapterPostMain() {
  const userMainController = useContext(ContextForUserMain);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const postObj = useContext(ContextForUserPostObj);
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postObj.id,
  );
  const thumbnail = attachmentListController.state.objs
    .filter((attachment) => attachment.variant === ElementVariant.FILE)
    .slice(0, 1);

  return (
    <div className='flex w-full flex-row items-center space-x-[1rem]'>
      <div
        className='flex w-full cursor-pointer flex-row items-center space-x-[2rem]'
        onClick={() => {
          postListController.actions.stateActions.select(postObj);
          publicSpaceController.actions.updateFeedView(
            PublicSpaceFeedView.POST,
          );
        }}
      >
        <PublicSpaceChapterPostThumbnail />
        <PublicSpaceChapterPostDetails />
      </div>
      <PublicSpaceChapterPostKarma />
    </div>
  );
}
