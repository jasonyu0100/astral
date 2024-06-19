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
      className='aspect-[9/13] w-[200px]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-col p-[2rem] font-bold text-white'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
