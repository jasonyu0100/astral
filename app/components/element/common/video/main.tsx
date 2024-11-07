import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx, roundedFx } from '@/style/data';
import { useEffect, useRef, useState } from 'react';

export function ElementVideo({ src }: { src: string }) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Create a canvas to capture a thumbnail at 0.5 seconds
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0.5; // Jump to 0.5 seconds to capture the thumbnail
      video.onseeked = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          // Draw the current frame to the canvas
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          // Set the thumbnail as a data URL
          setThumbnail(canvas.toDataURL());
        }
      };
    }
  }, [src]);

  return (
    <GlassWindowFrame
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents>
        <video
          ref={videoRef}
          id={`video-${src}`}
          onClick={() => {
            const video = videoRef.current;
            if (video?.paused) {
              video.currentTime = 0.5; // Start video 0.5 seconds in
              video.play();
            } else {
              video.pause();
            }
          }}
          src={src}
          className='w-full flex-shrink-0 cursor-pointer bg-black'
          poster={thumbnail || ''} // Use the generated thumbnail as the poster
        />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
