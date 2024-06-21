import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';

export function ProfileUserConnectsHeader() {
  return (
    <GlassWindowFrame className='flex h-[4rem]'>
      <GlassWindowContents className='flex h-full w-full flex-row items-center justify-center'>
        <p className='text-lg font-light text-slate-300'>Connects</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
