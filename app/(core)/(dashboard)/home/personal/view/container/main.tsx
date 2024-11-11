import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx, roundedFx } from '@/style/data';

export function HomePersonalContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      className='h-full w-full flex-shrink-0'
      roundedFx={roundedFx['rounded-container']}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents>{children}</GlassWindowContents>
    </GlassWindowFrame>
  );
}
