import { SpaceMapAddIcon } from './tools/add/main';
import { SpaceMapCursorIcon } from './tools/cursor/main';
import { SpaceMapLinkIcon } from './tools/link/main';
import { SpaceMapTextIcon } from './tools/text/main';

export function SpaceMapHeaderLeft() {
  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <SpaceMapCursorIcon />
        <SpaceMapAddIcon />
        <SpaceMapTextIcon />
        <SpaceMapLinkIcon />
        {/* <SpaceMapCollaboratorIcon /> */}
        {/* <SpaceMapGroupIcon /> */}
        {/* <SpaceMapFolderIcon /> */}
        {/* <SpaceMapJournalIcon /> */}
      </div>
    </>
  );
}
