import { SpaceVerseContentsDisplay } from './display/main';

export function SpaceVerseCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col'
    >
      <SpaceVerseContentsDisplay />
    </div>
  );
}
