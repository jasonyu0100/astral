import { ResourceContext } from '@/(ouros)/(model)/resource/main';
import { useContext } from 'react';

export function CollectionResourceVideo() {
  const resource = useContext(ResourceContext);

  return (
    <div className='flex h-full w-full flex-col'>
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
        className='aspect-square w-full cursor-pointer bg-black'
      />
      <p className='mt-[0.5rem] w-full font-extraBold text-xl'>
        {resource.file?.title}
      </p>
    </div>
  );
}
