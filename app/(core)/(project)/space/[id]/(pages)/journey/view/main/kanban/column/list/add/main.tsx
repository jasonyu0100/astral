import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpaceJourneyAddItem({ onClick }: { onClick: () => void }) {
  return (
    <GlassWindowFrame
      className='w-full flex-shrink-0 p-[1rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        className='flex flex-row justify-between space-x-[1rem] text-slate-300'
        onClick={onClick}
      >
        <p className='font-bold text-slate-300'>Add Idea</p>
        <AstralAddIcon />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
