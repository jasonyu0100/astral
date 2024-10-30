import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForPostAttachmentListFromUser } from '@/server/controller/post/attachment/list-from-user';
import { ElementVariant } from '@/server/model/elements/main';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function UserProfileOverviewHighlights() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  console.log(loggedInUser);
  const attachmentListController = useControllerForPostAttachmentListFromUser(
    loggedInUser?.id || '',
  );

  return (
    <GlassWindowFrame className='w-full' roundedFx={roundedFx['rounded']}>
      <GlassWindowContents className='flex w-full flex-col'>
        <div className='columns-4 gap-[1rem] space-y-[1rem] p-[1rem]'>
          {attachmentListController.state.objs
            .filter((attachment) => ElementVariant.FILE === attachment.variant)
            .map((attachment) => (
              <ContextForPostAttachmentObj.Provider value={attachment}>
                <ElementAttachment />
              </ContextForPostAttachmentObj.Provider>
            ))}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-20']} />
    </GlassWindowFrame>
  );
}
