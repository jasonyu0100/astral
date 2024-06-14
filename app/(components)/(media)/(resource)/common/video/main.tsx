import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';

export function CollectionResourceVideo() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col'>
      <video
        id={`video-${resource.id}`}
        onClick={(e) => {
          e.stopPropagation();
          const video = document.getElementById(
            `video-${resource.id}`,
          ) as HTMLVideoElement;
          if (video?.paused) {
            video?.play();
          } else {
            video?.pause();
          }
        }}
        src={resource?.fileElem?.src}
        className='aspect-square w-full flex-shrink-0 cursor-pointer bg-black'
      />
      <p className='mt-[0.5rem] w-full font-extraBold text-xl'>
        {resource.title}
      </p>
    </div>
  );
}
