import { ElementAttachment } from '@/components/element/attachment/main';
import { ContextForPostAttachmentListFromPost } from '@/server/controller/post/attachment/list-from-post';
import {
  ContextForPostAttachmentObj,
  examplePostAttachment,
} from '@/server/model/post/attachment/main';
import { useContext } from 'react';

export function SpacesPostCarouselSlide({ index }: { index: number }) {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );
  const attachment =
    attachmentListController.state.objs.at(index) || examplePostAttachment;

  return (
    <div className='aspect-video w-full overflow-hidden rounded-[1rem] bg-black'>
      <ContextForPostAttachmentObj.Provider value={attachment}>
        <ElementAttachment />
      </ContextForPostAttachmentObj.Provider>
    </div>
  );
}
