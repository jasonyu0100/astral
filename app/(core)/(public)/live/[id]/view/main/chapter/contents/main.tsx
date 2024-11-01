import { ElementAttachment } from '@/components/element/attachment/main';
import { useControllerForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';

export function PublicSpaceChapterPostContents() {
  const postObj = useContext(ContextForUserPostObj);
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postObj.id,
  );

  return (
    <>
      <div className='w-full flex-shrink-0 columns-4 gap-[1rem] space-y-[1rem]'>
        {attachmentListController.state.objs.map((attachment) => (
          <ContextForPostAttachmentObj.Provider value={attachment}>
            <div className='flex flex-col space-y-[1rem]'>
              <ElementAttachment />
            </div>
          </ContextForPostAttachmentObj.Provider>
        ))}
      </div>
    </>
  );
}
