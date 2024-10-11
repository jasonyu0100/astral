import { useControllerForPostAttachmentListFromUser } from '@/(server)/controller/post/attachment/list-from-user';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function UserProfileOverviewGallery() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  console.log(loggedInUser);
  const attachmentListController = useControllerForPostAttachmentListFromUser(
    loggedInUser?.id || '',
  );

  return (
    <GlassWindowFrame className='w-full'>
      <GlassWindowContents className='flex w-full flex-col'>
        <div className='grid grid-cols-5'>
          {attachmentListController.state.objs
            .filter((attachment) => ElementVariant.FILE === attachment.variant)
            .map((attachment) => (
              <img
                className='aspect-square h-full w-full bg-black'
                src={attachment.fileElem?.src}
              />
            ))}
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
