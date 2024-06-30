import { SpaceVerseActionDown } from './down/main';
import { SpaceVerseActionUp } from './up/main';
import { SpaceVerseContentsVerse } from './verse/main';

export function SpaceVerseCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center justify-between p-[2rem]'
    >
      <SpaceVerseActionUp />
      <SpaceVerseContentsVerse />
      <SpaceVerseActionDown />
    </div>
  );
}
