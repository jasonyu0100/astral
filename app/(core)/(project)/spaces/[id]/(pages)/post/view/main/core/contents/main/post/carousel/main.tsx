import { ContextForPostAttachmentListFromPost } from '@/(server)/controller/post/attachment/list-from-post';
import {
  ContextForPostAttachmentObj,
  examplePostAttachment,
} from '@/(server)/model/post/attachment/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassAreaContents } from '@/components/glass/area/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
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
        <GlassWindowFrame className='aspect-square w-full'>
          <GlassAreaContents className='flex w-full flex-row items-center justify-center bg-black object-contain'>
            <ElementAttachment />
          </GlassAreaContents>
        </GlassWindowFrame>
      </div>
    </ContextForPostAttachmentObj.Provider>
  );
}
