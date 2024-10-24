import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';

export function HorizonsArcGridItem() {
  return (
    <GlassWindowFrame
      className='aspect-video'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents></GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
