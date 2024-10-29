import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesPageMainPost() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );
  return (
    <GlassWindowFrame
      className='h-[600px] w-full bg-slate-900 px-[1rem] py-[2rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='h-full w-full overflow-auto pr-[1rem]'>
        <div className='grid w-full grid-cols-4 items-center justify-items-center gap-[1rem]'>
          {attachmentListController.state.objs.length === 0 && (
            <p className='text-3xl font-black text-slate-300'>NONE</p>
          )}
          {attachmentListController.state.objs.map((attachment) => (
            <ContextForPostAttachmentObj.Provider value={attachment}>
              <ElementAttachment />
            </ContextForPostAttachmentObj.Provider>
          ))}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
