'use client';

import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
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
import { useControllerForUserMain } from '@/server/controller/user/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import {
  ContextForLoggedInUserObj,
  ContextForUserObj,
} from '@/server/model/user/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { getFormattedDate } from '@/utils/dateFormat';
import { useSearchParams } from 'next/navigation';
import { createContext, useState } from 'react';
import { PublicSpacesPageComments } from './view/main/comments/main';
import { PublicSpacesPageKarma } from './view/main/karma/main';
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
      <ContextForUserObj.Provider value={userMainController}>
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
                          <GlassWindowContents className='flex h-full w-full flex-row overflow-auto'>
                            <div className='flex h-full flex-grow flex-col space-y-[2rem] p-[4rem]'>
                              {page === PublicSpacePage.SPACE && (
                                <GlassWindowFrame
                                  className='h-full flex-grow'
                                  roundedFx={roundedFx.rounded}
                                >
                                  <GlassWindowContents className='flex flex-col space-y-[2rem] overflow-auto p-[2rem]'>
                                    <h1
                                      className='cursor-pointer text-2xl font-bold text-slate-300'
                                      onClick={() => {
                                        setPage(PublicSpacePage.SPACE);
                                      }}
                                    >
                                      Home
                                    </h1>
                                    <HorizontalDivider />
                                    <div className='flex w-full flex-row items-center space-x-[1rem]'>
                                      <div className='flex w-full flex-col space-y-[1rem]'>
                                        <img
                                          className='max-h-[600px] w-full'
                                          src={
                                            chapterListController.state
                                              .currentObj?.bg
                                          }
                                        />
                                        <h1 className='text-3xl font-bold text-slate-300'>
                                          {spaceMainController.state.obj?.title}
                                        </h1>
                                        <p className='text-lg font-bold text-slate-300'>
                                          {
                                            spaceMainController.state.obj
                                              ?.description
                                          }
                                        </p>
                                      </div>
                                    </div>
                                    <div className='space-y-[0.5rem]'>
                                      <p className=' text-sm font-light text-white'>
                                        {getFormattedDate(
                                          new Date(
                                            spaceMainController.state.obj
                                              ?.created ?? '',
                                          ),
                                        )}
                                      </p>
                                    </div>
                                  </GlassWindowContents>
                                  {/* <GlassWindowPane glassFx={glassFx['glass-10']} /> */}
                                </GlassWindowFrame>
                              )}
                              {page === PublicSpacePage.CHAPTERS && (
                                <>
                                  <GlassWindowFrame
                                    className='h-[600px] w-full flex-shrink-0 bg-slate-900 px-[1rem] py-[2rem]'
                                    roundedFx={roundedFx.rounded}
                                    borderFx={borderFx['border-around']}
                                  >
                                    <GlassWindowContents className='h-full w-full overflow-auto pr-[1rem]'>
                                      <div className='grid h-full w-full grid-cols-4 justify-items-center gap-[1rem]'>
                                        {attachmentListController.state.objs
                                          .length === 0 && (
                                          <p className='text-3xl font-black text-slate-300'>
                                            NONE
                                          </p>
                                        )}
                                        {attachmentListController.state.objs.map(
                                          (attachment) => (
                                            <ContextForPostAttachmentObj.Provider
                                              value={attachment}
                                            >
                                              <ElementAttachment />
                                            </ContextForPostAttachmentObj.Provider>
                                          ),
                                        )}
                                      </div>
                                    </GlassWindowContents>
                                    <GlassWindowPane
                                      glassFx={glassFx['glass-10']}
                                    />
                                  </GlassWindowFrame>
                                  <h1 className='text-2xl font-bold text-slate-300'>
                                    {
                                      chapterListController.state.currentObj
                                        ?.title
                                    }
                                  </h1>
                                  <HorizontalDivider />
                                  <div className='flex w-full flex-row items-center space-x-[1rem]'>
                                    <div className='flex w-full flex-col space-y-[1rem]'>
                                      <div className='flex w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
                                        <div className='flex flex-row items-center space-x-[1rem]'>
                                          <img
                                            className='aspect-square h-[3rem] rounded-full'
                                            src={
                                              userMainController.state.obj?.dp
                                                ?.src || exampleFileElement.src
                                            }
                                          />
                                          <p className='text-2xl font-bold text-slate-300'>
                                            {postListController.state.currentObj?.title?.trim() ||
                                              'Untitled'}
                                          </p>
                                        </div>
                                      </div>
                                      <p className='text-lg font-bold text-slate-300'>
                                        {
                                          postListController.state.currentObj
                                            ?.description
                                        }
                                      </p>
                                    </div>
                                    <PublicSpacesPageKarma />
                                  </div>
                                  <div className='space-y-[0.5rem]'>
                                    <p className=' text-sm font-light text-white'>
                                      {getFormattedDate(
                                        new Date(
                                          postListController.state.currentObj
                                            ?.created ?? '',
                                        ),
                                      )}
                                    </p>
                                  </div>
                                  <PublicSpacesPageComments />
                                </>
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
      </ContextForUserObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default Page;
