import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceSeaUnaddedCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      className='aspect-[9/13] w-[150px] flex-shrink-0'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-col'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
