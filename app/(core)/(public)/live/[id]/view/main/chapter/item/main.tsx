import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { PublicSpaceChapterPostDescription } from './description/main';

export function PublicSpaceChapterPost() {
  return (
    <GlassWindowFrame
      className='p-[3rem]'
      borderFx={borderFx['border-tb']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
        <PublicSpaceChapterPostDescription />
        {/* <PublicSpaceChapterPostContents /> */}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
