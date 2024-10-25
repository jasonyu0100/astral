import { ContextForPostAttachmentListFromPost } from '@/(server)/controller/post/attachment/list-from-post';
import {
  ContextForPostAttachmentObj,
  examplePostAttachment,
} from '@/(server)/model/post/attachment/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { useContext } from 'react';

export function SpacesPostContainer() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );

  return (
    <ContextForPostAttachmentObj.Provider
      value={attachmentListController.state.currentObj || examplePostAttachment}
    >
      <div className='flex h-full w-full max-w-[500px] flex-row  items-center space-x-[2rem]'>
        <ElementAttachment />
      </div>
    </ContextForPostAttachmentObj.Provider>
  );
}
