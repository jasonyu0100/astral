import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export function TimeNumberIdea() {
  return (
    <GlassWindowFrame className='aspect-square h-[20rem] animate-pulse-slow shadow-glow'>
      <GlassWindowContents className='flex h-full w-full flex-col items-center justify-center p-[1rem]'>
        <p className='text-2xl font-bold text-white'>20:38</p>
        <p className='text-md font-bold text-white'>4/06/24</p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
