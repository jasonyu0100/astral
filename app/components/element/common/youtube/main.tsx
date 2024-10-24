import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { roundedFx } from '@/style/data';

export function ElementYouTube({ url }: { url: string }) {
  return (
    <GlassWindowFrame roundedFx={roundedFx.rounded} className='w-full'>
      <GlassWindowContents>
        <iframe
          onDrag={(e) => e.stopPropagation()}
          src={url}
          title='YouTube video player'
          className='aspect-video'
          style={{ objectFit: 'contain', width: '100%' }}
        />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
