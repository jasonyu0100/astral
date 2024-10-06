import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { HorizonsHorizonListPost } from './item/main';
import { HorizonsHorizonListRow } from './row/main';

export function HorizonsHorizonPost() {
  return (
    <GlassWindowFrame
      className='w-full p-[2rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex flex-col space-y-[1rem]'>
        <HorizonsHorizonListPost />
        <HorizonsHorizonListRow />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
