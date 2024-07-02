import { SpaceMapToolsBottom } from './bottom/main';
import { SpaceMapToolsTop } from './top/main';

export function SpaceMapContentsTools() {
  return (
    <>
      <div style={{ left: '1rem', top: '1rem' }} className='absolute'>
        <SpaceMapToolsTop />
      </div>
      <div style={{ right: '1rem', top: '1rem' }} className='absolute'>
        <SpaceMapToolsBottom />
      </div>
    </>
  );
}
