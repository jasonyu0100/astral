import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { SpaceVersesContentsVerse } from './verse/main';

export function SpaceVersesCoreContents() {
  return (
    <GlassWindowFrame className='h-full w-full'>
      <GlassWindowContents className='flex flex-col p-[2rem]'>
        <SpaceVersesContentsVerse />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
