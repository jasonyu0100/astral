import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function SpacesSpaceGenerateRowContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx.rounded}
      className='aspect-video h-full flex-shrink-0'
    >
      <GlassWindowContents className='flex h-full w-full flex-col'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
