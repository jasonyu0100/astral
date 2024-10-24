import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx } from '@/style/data';

export function SpacesChatGenerateRow({
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
