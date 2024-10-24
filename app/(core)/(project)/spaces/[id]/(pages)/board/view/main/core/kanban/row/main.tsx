import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx } from '@/style/data';

export function SpaceJourneyRow({ children }: { children: React.ReactNode }) {
  return (
    <GlassWindowFrame
      className='h-full w-full p-[1rem]'
      borderFx={borderFx['border-b']}
    >
      <GlassWindowContents className='flex h-full flex-col space-y-[1rem] overflow-auto'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx.none} />
    </GlassWindowFrame>
  );
}
