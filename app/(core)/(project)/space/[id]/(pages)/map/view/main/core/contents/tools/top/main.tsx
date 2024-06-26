import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { SpaceMapAddIcon } from './add/main';
import { SpaceMapCursorIcon } from './cursor/main';
import { SpaceMapGroupIcon } from './group/main';
import { SpaceMapSaveIcon } from './save/main';

export function SpaceMapToolsTop() {
  return (
    <div className=''>
      <GlassWindowFrame className='w-[3rem]' roundedFx={roundedFx.rounded}>
        <GlassWindowContents className='flex w-full flex-col items-center space-y-[1rem] py-[1rem]'>
          <SpaceMapCursorIcon />
          <SpaceMapAddIcon />
          <SpaceMapGroupIcon />
          {/* <SpaceMapFolderIcon /> */}
          {/* <SpaceMapJournalIcon /> */}
          <SpaceMapSaveIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
