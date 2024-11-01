import { ElementAttachment } from '@/components/element/attachment/main';
import { ContextForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { useContext } from 'react';

export function SpacesPreviewMainPostContents() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='flex w-full flex-col  space-y-[2rem]'
      style={{ height: '100%' }}
    >
      <div className='w-full columns-4 gap-[1rem] space-y-[1rem]'>
        {attachmentListController.state.objs.length === 0 && (
          <p className='text-3xl font-black text-slate-300'>NONE</p>
        )}
        {attachmentListController.state.objs.map((attachment) => (
          <ContextForPostAttachmentObj.Provider value={attachment}>
            <ElementAttachment />
          </ContextForPostAttachmentObj.Provider>
        ))}
      </div>
      {/* <div className='flex flex-row items-center space-x-[1rem]'>
        <AstralArrowBackIcon
          onClick={() => postListController.actions.stateActions.goPrev()}
        />
        <div className='flex h-[2rem] flex-shrink-0 items-center justify-center rounded-full'>
          <p className='font-bold text-slate-300'>
            {postListController.state.index + 1} of{' '}
            {postListController.state.objs.length}
          </p>
        </div>
        <AstralArrowForwardIcon
          onClick={() => postListController.actions.stateActions.goNext()}
        />
      </div> */}
    </div>
  );
}
