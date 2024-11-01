import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { SpacesPreviewChapterPostDescription } from '../description/main';

export function SpacesPreviewChapterItem() {
  return (
    <GlassWindowFrame
      className='p-[1rem]'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents>
        <SpacesPreviewChapterPostDescription />
        {/* <SpacesPreviewChapterPostContents /> */}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
