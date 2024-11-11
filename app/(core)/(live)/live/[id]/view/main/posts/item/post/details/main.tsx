import { ContextForPublicSpace } from '@/(core)/(live)/live/[id]/controller/main';
import { useControllerForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { useControllerForPostCommentList } from '@/architecture/controller/post/comment/list';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { glassFx, roundedFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function PublicSpaceChapterPostDetails() {
  const userMainController = useContext(ContextForUserMain);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const postObj = useContext(ContextForUserPostObj);
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postObj.id,
  );
  const commentListController = useControllerForPostCommentList(postObj.id);

  return (
    <div className='flex w-full flex-col justify-between space-y-[1rem]'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <img
          className='aspect-square h-[3rem] rounded-full'
          src={userMainController.state.obj?.dp?.src || exampleFileElement.src}
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
      <p className='text-lg text-slate-400'>{postObj?.description}</p>
      <GlassWindowFrame
        roundedFx={roundedFx['rounded-full']}
        className='w-[180px] flex-shrink-0'
      >
        <GlassWindowContents
          className='flex cursor-pointer flex-row items-center space-x-[1rem] px-[1rem] py-[0.5rem]'
          onClick={() => {}}
        >
          <AstralChatIndicatorIcon />
          <p className='font-bold text-slate-300'>
            {commentListController.state.objs.length} messages
          </p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
