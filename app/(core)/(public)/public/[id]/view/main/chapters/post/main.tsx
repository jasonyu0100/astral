import { ElementAttachment } from '@/components/element/attachment/main';
import { ContextForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { useContext } from 'react';

export function PublicSpacePost() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );

  return (
    <div className='w-full flex-shrink-0 columns-4 gap-[1rem] space-y-[1rem]'>
      {attachmentListController.state.objs.length === 0 && (
        <p className='text-3xl font-black text-slate-300'>NONE</p>
      )}
      {attachmentListController.state.objs.map((attachment) => (
        <ContextForPostAttachmentObj.Provider value={attachment}>
          <div className='flex flex-col space-y-[1rem]'>
            <ElementAttachment />
          </div>
        </ContextForPostAttachmentObj.Provider>
      ))}
    </div>
  );
}
