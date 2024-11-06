import { useControllerForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForPostAttachmentObj } from '@/architecture/model/post/attachment/main';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralArticleIcon } from '@/icons/article/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';

export function PublicSpaceChapterPostThumbnail() {
  const postObj = useContext(ContextForUserPostObj);
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postObj.id,
  );
  const thumbnail = attachmentListController.state.objs
    .filter((attachment) => attachment.variant === ElementVariant.FILE)
    .slice(0, 1);

  return (
    <GlassWindowFrame className='flex min-h-[150px] w-[200px] items-center justify-center'>
      <GlassWindowContents className='flex h-full w-full flex-col items-center justify-center space-y-[2rem]'>
        {thumbnail.length === 0 && (
          <AstralArticleIcon className='fill-slate-500' />
        )}
        {thumbnail.map((attachment) => (
          <ContextForPostAttachmentObj.Provider value={attachment}>
            <ElementAttachment />
          </ContextForPostAttachmentObj.Provider>
        ))}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
