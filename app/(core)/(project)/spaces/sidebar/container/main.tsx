import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';

export function SpacesSidebarContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame className='flex h-full w-[4.5rem] flex-shrink-0 flex-col items-center p-[1rem]'>
      <GlassWindowContents className='relative flex h-full w-full flex-col'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
