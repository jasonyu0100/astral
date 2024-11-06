import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx, roundedFx } from '@/style/data';

export function ElementYouTube({ url }: { url: string }) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents>
        <iframe
          onDrag={(e) => e.stopPropagation()}
          src={url}
          title='YouTube video player'
          className='aspect-video flex-shrink-0'
          style={{ objectFit: 'contain', width: '100%' }}
        />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
