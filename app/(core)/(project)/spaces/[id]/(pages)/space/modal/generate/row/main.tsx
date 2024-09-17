import { borderFx, glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpacesSpaceGenerateRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      className='h-[20rem] w-full p-[3rem] '
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full flex-row items-center space-x-[2rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
