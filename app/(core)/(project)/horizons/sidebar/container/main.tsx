import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';

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
