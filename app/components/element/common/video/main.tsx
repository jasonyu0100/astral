import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { roundedFx } from '@/style/data';

export function ElementVideo({ src }: { src: string }) {
  return (
    <GlassWindowFrame roundedFx={roundedFx.rounded}>
      <GlassWindowContents>
        <video
          id={`video-${src}`}
          onClick={() => {
            const video = document.getElementById(
              `video-${src}`,
            ) as HTMLVideoElement;
            if (video?.paused) {
              video?.play();
            } else {
              video?.pause();
            }
          }}
          src={src}
          className='aspect-video w-full flex-shrink-0 cursor-pointer bg-black'
        />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
