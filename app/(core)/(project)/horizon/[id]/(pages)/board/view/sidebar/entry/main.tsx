import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function HorizonBoardSidebarEntry({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name='temp'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='p-[1rem]'
    >
      <GlassWindowContents className='flex flex-row'>
        <p className='text-white'>{children}</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
