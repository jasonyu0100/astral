import { SpaceVerseList } from './display/main';
import { SpaceVerseListOverlay } from './overlay/main';

export function SpaceVerseCoreContents() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      <SpaceVerseListOverlay />
      <SpaceVerseList />
    </div>
  );
}
