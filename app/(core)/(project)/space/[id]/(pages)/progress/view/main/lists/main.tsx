import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceProgressList({ children }: { children: React.ReactNode }) {
  return (
    <GlassWindowFrame
      className='h-full w-full p-[1rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-col space-y-[2rem] overflow-auto  pr-[1rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
