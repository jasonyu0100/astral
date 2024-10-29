import { ElementAttachment } from '@/components/element/attachment/main';
import { ContextForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { useContext } from 'react';

export function SpacesPostMainPost() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );
  return (
    <div className='grid w-full grid-cols-4 items-center gap-[1rem] rounded-[1rem] bg-slate-950 bg-opacity-30 p-[1rem] py-[2rem] shadow-glow'>
      {attachmentListController.state.objs.map((attachment) => (
        <ContextForPostAttachmentObj.Provider value={attachment}>
          <ElementAttachment />
        </ContextForPostAttachmentObj.Provider>
      ))}
    </div>
  );
}
