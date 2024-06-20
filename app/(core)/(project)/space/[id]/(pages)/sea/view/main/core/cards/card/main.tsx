import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceSeaWorkCard({ children }: { children: React.ReactNode }) {
  return (
    <GlassWindowFrame
      className='h-[180px] w-[180px] flex-shrink-0'
      roundedFx={roundedFx['rounded-container']}
    >
      <GlassWindowContents className='flex flex-col items-center space-y-[0.25rem] p-[1rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
