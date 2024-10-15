import { ContextForPostAttachmentListFromPost } from '@/(server)/controller/post/attachment/list-from-post';
import { useContext } from 'react';

export function SpacesFlightCarouselSlide({ index }: { index: number }) {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );
  const images = attachmentListController.state.objs.map(
    (obj) => obj.fileElem?.src || '',
  );

  return (
    <div className='aspect-video w-full overflow-hidden rounded-[1rem] bg-black'>
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className='h-full w-full object-contain'
      />
    </div>
  );
}
