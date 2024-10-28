import { ElementAttachment } from '@/components/element/attachment/main';
import { ContextForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { useContext } from 'react';

export function SpacesPostMainPost() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );
  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[3rem]'>
      <div className='grid w-full grid-cols-3 gap-[1rem] rounded-[1rem] bg-slate-800 bg-opacity-30 p-[2rem]'>
        {attachmentListController.state.objs.map((attachment) => (
          <ContextForPostAttachmentObj.Provider value={attachment}>
            <ElementAttachment />
          </ContextForPostAttachmentObj.Provider>
        ))}
      </div>
    </div>
  );
}
