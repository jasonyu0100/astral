import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function HorizonSidebarContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame className='flex h-full w-[6.5rem] flex-shrink-0 flex-col items-center pt-[1rem]'>
      <GlassWindowContents className='relative flex h-full w-full flex-col items-center'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
