'use client';

import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
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
import { glassFx } from '@/style/data';
import { useSearchParams } from 'next/navigation';
import { createContext, useState } from 'react';
import { PublicSpaceChapters } from './view/main/chapters/main';
import { PublicSpaceSpace } from './view/main/space/main';
import { PublicSpaceSidebar } from './view/sidebar/main';

export enum PublicSpacePage {
  SPACE = 'space',
  CHAPTERS = 'chapters',
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  page: PublicSpacePage;
}

interface ControllerActions {
  updatePage: (page: PublicSpacePage) => void;
}

export const ContextForPublicSpace = createContext({} as Controller);

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

  const [page, setPage] = useState(PublicSpacePage.CHAPTERS);

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
                      value={{
                        state: {
                          page: page,
                        },
                        actions: {
                          updatePage: (page: PublicSpacePage) => {
                            setPage(page);
                          },
                        },
                      }}
                    >
                      <div
                        className='relative flex h-full w-full flex-col'
                        style={{ height: 'calc(100% - 4rem)' }}
                      >
                        <GlassWindowFrame className='h-full w-full'>
                          <GlassWindowContents className='flex h-full w-full flex-row space-x-[4rem] overflow-auto px-[4rem]'>
                            <div className='flex h-full flex-grow flex-col space-y-[2rem] py-[4rem]'>
                              {page === PublicSpacePage.SPACE && (
                                <PublicSpaceSpace />
                              )}
                              {page === PublicSpacePage.CHAPTERS && (
                                <PublicSpaceChapters />
                              )}
                            </div>
                            <PublicSpaceSidebar />
                          </GlassWindowContents>
                          <GlassWindowPane glassFx={glassFx['glass-10']} />
                        </GlassWindowFrame>
                      </div>
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
