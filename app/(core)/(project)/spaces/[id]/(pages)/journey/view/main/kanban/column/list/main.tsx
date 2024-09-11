import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpacesJourneyList({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <ul id={id} className='h-full w-full space-y-[1rem]'>
      <GlassWindowFrame className='h-full w-full p-[1rem]'>
        <GlassWindowContents className='flex flex-col space-y-[1rem] overflow-auto pr-[1rem]'>
          {children}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </ul>
  );
}
