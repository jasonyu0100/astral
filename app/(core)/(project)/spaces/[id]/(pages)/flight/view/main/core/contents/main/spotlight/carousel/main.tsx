import { ContextForSpotlightAttachmentList } from '@/(server)/controller/space/chapter/spotlight/attachment/list';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext, useState } from 'react';

export function SpacesFlightCarousel() {
  const attachmentListController = useContext(
    ContextForSpotlightAttachmentList,
  );
  const images = attachmentListController.state.objs.map(
    (obj) => obj.fileElem?.src || '',
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className='flex h-full w-full max-w-[1000px] flex-row  items-center space-x-[2rem]'>
      <div className='relative w-full'>
        <div className='aspect-video w-full overflow-hidden rounded-[2rem] bg-black'>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className='h-full w-full object-contain'
          />
        </div>
        <button
          className='absolute left-[1rem] top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-[1rem]'
          onClick={handlePrev}
        >
          <AstralChevronLeftIcon />
        </button>
        <button
          className='absolute right-[1rem] top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-[1rem]'
          onClick={handleNext}
        >
          <AstralChevronRightIcon />
        </button>
        <div className='absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4'>
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
