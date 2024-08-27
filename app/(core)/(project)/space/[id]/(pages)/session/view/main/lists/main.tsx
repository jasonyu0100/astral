import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpaceSessionList({ children }: { children: React.ReactNode }) {
  return (
    <GlassWindowFrame
      className='h-full w-full p-[1rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-col space-y-[2rem] overflow-auto  pr-[1rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
