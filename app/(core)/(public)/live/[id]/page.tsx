'use client';

import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForPostAttachmentListFromPost,
  useControllerForPostAttachmentListFromPost,
} from '@/server/controller/post/attachment/list-from-post';
import {
  ContextForPostCommentList,
  useControllerForPostCommentList,
} from '@/server/controller/post/comment/list';
import {
  ContextForPostKarmaList,
  useControllerForPostKarmaList,
} from '@/server/controller/post/karma/list';
import {
  ContextForUserPostListFromChapter,
  useControllerForUserPostListFromChapter,
} from '@/server/controller/post/list-from-chapter';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/server/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/server/controller/space/main';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/server/controller/user/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { useSearchParams } from 'next/navigation';
import {
  ContextForPublicSpace,
  useControllerForPublicSpace,
} from './controller/main';
import { PublicSpaceView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get('chapter');
  const spaceMainController = useControllerForSpaceMain(params.id);
  const userMainController = useControllerForUserMain(
    spaceMainController.state.obj.userId,
  );
  const loggedInUser = useGlobalUser((state) => state.user);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const postListController = useControllerForUserPostListFromChapter(
    chapterListController.state.objId,
  );
  const commentListController = useControllerForPostCommentList(
    postListController.state.objId,
  );
  const postKarmaListController = useControllerForPostKarmaList(
    postListController.state.objId,
  );
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postListController.state.objId,
  );

  const publicSpaceController = useControllerForPublicSpace();

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForUserMain.Provider value={userMainController}>
        <ContextForSpaceMain.Provider value={spaceMainController}>
          <ContextForSpaceChapterList.Provider value={chapterListController}>
            <ContextForUserPostListFromChapter.Provider
              value={postListController}
            >
              <ContextForPostKarmaList.Provider value={postKarmaListController}>
                <ContextForPostAttachmentListFromPost.Provider
                  value={attachmentListController}
                >
                  <ContextForPostCommentList.Provider
                    value={commentListController}
                  >
                    <ContextForPublicSpace.Provider
                      value={publicSpaceController}
                    >
                      <PublicSpaceView />
                    </ContextForPublicSpace.Provider>
                  </ContextForPostCommentList.Provider>
                </ContextForPostAttachmentListFromPost.Provider>
              </ContextForPostKarmaList.Provider>
            </ContextForUserPostListFromChapter.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForUserMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default Page;
