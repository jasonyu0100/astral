import { PipIndicator } from '@/(components)/(indicator)/pip/main';
import { SpaceMapCursorIcon } from './tools/cursor/main';
import { SpaceMapFolderIcon } from './tools/folder/main';
import { SpaceMapGroupIcon } from './tools/group/main';

export function SpaceMapHeaderLeft() {
  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <SpaceMapCursorIcon />
      <SpaceMapGroupIcon />
      <PipIndicator />
      <SpaceMapFolderIcon />
    </div>
  );
}
