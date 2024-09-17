import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { SpacesSpaceChapterActiveHeader } from './title/main';

export function SpacesSpaceActiveMain() {
  return (
    <GlassWindowFrame
      name={SpacesSpaceActiveMain.name}
      className='aspect-16/9 w-full flex-shrink-0 cursor-pointer'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
        <SpacesSpaceChapterActiveHeader />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
