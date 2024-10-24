import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';

export function HorizonHorizonSidebarItemMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame className='w-full p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents className='flex flex-col space-y-[0.5rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
