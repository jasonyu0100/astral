import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpaceProgressList({ children }: { children: React.ReactNode }) {
  return (
    <GlassWindowFrame
      className='h-full w-full p-[1rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex h-full flex-col items-center space-y-[1rem] overflow-auto'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
