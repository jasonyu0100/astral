import { SpaceVerseList } from './display/main';
import { SpaceVerseListOverlay } from './overlay/main';

export function SpaceVerseCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex flex-row'
      >
        <SpaceVerseListOverlay />
      </div>
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex flex-row'
      >
        <SpaceVerseList />
      </div>
    </div>
  );
}
