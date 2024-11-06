import { ContextForPublicSpace } from '@/(core)/(live)/live/[id]/controller/main';
import { useControllerForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
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
  const thumbnail = attachmentListController.state.objs
    .filter((attachment) => attachment.variant === ElementVariant.FILE)
    .slice(0, 1);

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
      <p className='text-lg text-slate-500'>{postObj?.description}</p>
    </div>
  );
}
