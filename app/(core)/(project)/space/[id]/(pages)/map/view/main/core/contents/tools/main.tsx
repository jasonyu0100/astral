import { SpaceMapToolsBottom } from './bottom/main';
import { SpaceMapToolsTop } from './top/main';

export function SpaceMapContentsTools() {
  return (
    <div className='flex h-full flex-col justify-between'>
      <SpaceMapToolsTop />
      <SpaceMapToolsBottom />
    </div>
  );
}
