import { CollectionResourceContext } from '@/(model)/gallery/resource/main';
import { useContext } from 'react';

export function CollectionResourceVideo() {
  const resource = useContext(CollectionResourceContext);

  return (
    <div className='flex h-full w-full flex-col flex-shrink-0'>
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
        src={resource?.file?.src}
        className='aspect-square w-full cursor-pointer bg-black flex-shrink-0'
      />
      <p className='mt-[0.5rem] w-full font-extraBold text-xl'>
        {resource.title}
      </p>
    </div>
  );
}
