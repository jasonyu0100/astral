import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '@/(core)/(live)/live/[id]/controller/main';
import { useControllerForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForPostAttachmentObj } from '@/architecture/model/post/attachment/main';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralArticleIcon } from '@/icons/article/main';
import { glassFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { PublicSpaceChapterPostKarma } from './karma/main';

export function PublicSpaceChapterPostDescription() {
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
        <GlassWindowFrame className='flex h-[150px] w-[200px] flex-shrink-0'>
          <GlassWindowContents className='flex h-full w-full flex-col items-center justify-center space-y-[2rem]'>
            {thumbnail.length === 0 && (
              <AstralArticleIcon className='fill-slate-500' />
            )}
            {thumbnail.map((attachment) => (
              <ContextForPostAttachmentObj.Provider value={attachment}>
                <ElementAttachment />
              </ContextForPostAttachmentObj.Provider>
            ))}
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <div className='flex w-full flex-col justify-between space-y-[1rem]'>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <img
              className='aspect-square h-[3rem] rounded-full'
              src={
                userMainController.state.obj?.dp?.src || exampleFileElement.src
              }
            />
            <div className='flex flex-col'>
              <p className='text-2xl font-bold text-slate-300'>
                {postObj?.title?.trim() || 'Untitled'}
              </p>
              <div className='flex flex-row'>
                <p className=' text-sm font-light text-white'>
                  {getFormattedAMPM(new Date(postObj?.created ?? ''))}
                </p>
                <span>,</span>
                <p className=' text-sm font-light text-white'>
                  {getFormattedDate(new Date(postObj?.created ?? ''))}
                </p>
              </div>
            </div>
          </div>
          <p className='text-lg text-slate-500'>{postObj?.description}</p>
        </div>
      </div>
      <PublicSpaceChapterPostKarma />
    </div>
  );
}
