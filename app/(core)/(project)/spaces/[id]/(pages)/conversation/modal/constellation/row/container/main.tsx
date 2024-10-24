import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';

export function SpacesConversationGenerateRowContainer({
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
