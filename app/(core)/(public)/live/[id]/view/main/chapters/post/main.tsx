import { ElementAttachment } from '@/components/element/attachment/main';
import { AstralArrowBackIcon } from '@/icons/arrow-back/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { useContext } from 'react';

export function PublicSpacePost() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );

  return (
    <div
      className='flex w-full flex-col items-center space-y-[2rem]'
      style={{ height: '100%' }}
    >
      <div className='w-full flex-shrink-0 columns-4 gap-[1rem] space-y-[1rem]'>
        {attachmentListController.state.objs.length === 0 && (
          <p className='text-3xl font-black text-slate-300'>NO POSTS</p>
        )}
        {attachmentListController.state.objs.map((attachment) => (
          <ContextForPostAttachmentObj.Provider value={attachment}>
            <div className='flex flex-col space-y-[1rem]'>
              <ElementAttachment />
            </div>
          </ContextForPostAttachmentObj.Provider>
        ))}
      </div>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <AstralArrowBackIcon
          onClick={() => postListController.actions.stateActions.goPrev()}
        />
        <div className='flex h-[2rem] w-[4rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
          <p className='font-bold text-slate-300'>
            {postListController.state.index + 1} /{' '}
            {postListController.state.objs.length}
          </p>
        </div>
        <AstralArrowForwardIcon
          onClick={() => postListController.actions.stateActions.goNext()}
        />
      </div>
    </div>
  );
}
