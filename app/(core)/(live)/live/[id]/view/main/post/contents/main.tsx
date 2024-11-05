import { ContextForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/architecture/model/post/attachment/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function PublicSpacePostContents() {
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
          <GlassWindowContents className='flex w-full flex-col space-y-[2rem] p-[2rem]'>
            <div className='flex flex-wrap gap-[2rem]'>
              {attachmentListController.state.objs.map((attachment, index) => (
                <ContextForPostAttachmentObj.Provider value={attachment}>
                  <div
                    className='flex w-[300px] flex-shrink-0 flex-col space-y-[1rem]'
                    key={index}
                  >
                    <p className='text-xl font-bold text-slate-500'>
                      {attachment.title}
                    </p>
                    <ElementAttachment />
                  </div>
                </ContextForPostAttachmentObj.Provider>
              ))}
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      )}
    </>
  );
}
