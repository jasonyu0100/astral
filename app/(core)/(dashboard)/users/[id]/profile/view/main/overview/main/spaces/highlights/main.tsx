import { useControllerForPostAttachmentListFromUser } from '@/(server)/controller/post/attachment/list-from-user';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForPostAttachmentObj } from '@/(server)/model/post/attachment/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';

export function UserProfileOverviewHighlights() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  console.log(loggedInUser);
  const attachmentListController = useControllerForPostAttachmentListFromUser(
    loggedInUser?.id || '',
  );

  return (
    <GlassWindowFrame className='w-full'>
      <GlassWindowContents className='flex w-full flex-col'>
        <div className='grid grid-cols-3 items-center justify-items-center gap-[1rem]'>
          {attachmentListController.state.objs
            .filter((attachment) => ElementVariant.FILE === attachment.variant)
            .map((attachment) => (
              <ContextForPostAttachmentObj.Provider value={attachment}>
                <ElementAttachment />
              </ContextForPostAttachmentObj.Provider>
            ))}
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
