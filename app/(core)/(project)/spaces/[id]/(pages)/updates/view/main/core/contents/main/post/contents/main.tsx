import { ContextForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/architecture/model/post/attachment/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesUpdatesPostContents() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );

  return (
    <>
      {attachmentListController.state.objs.length > 0 && (
        <GlassWindowFrame
          className='flex-shrink-0'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex w-full flex-col  space-y-[2rem] p-[2rem]'>
            <div className='grid w-full grid-cols-4 gap-[1rem]'>
              {attachmentListController.state.objs.map((attachment) => (
                <ContextForPostAttachmentObj.Provider value={attachment}>
                  <ElementAttachment />
                </ContextForPostAttachmentObj.Provider>
              ))}
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </>
  );
}
