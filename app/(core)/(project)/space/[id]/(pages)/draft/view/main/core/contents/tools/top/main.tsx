import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { SpaceDraftAddIcon } from './add/main';
import { SpaceDraftCursorIcon } from './cursor/main';
import { SpaceDraftGroupIcon } from './group/main';
import { SpaceDraftSaveIcon } from './save/main';

export function SpaceDraftToolsTop() {
  return (
    <div className='px-[1rem] py-[1rem]'>
      <GlassWindowFrame className='w-[3rem]' roundedFx={roundedFx.rounded}>
        <GlassWindowContents className='flex w-full flex-col items-center space-y-[1rem] py-[1rem]'>
          <SpaceDraftCursorIcon />
          <SpaceDraftAddIcon />
          <SpaceDraftGroupIcon />
          {/* <SpaceDraftFolderIcon /> */}
          {/* <SpaceDraftJournalIcon /> */}
          <SpaceDraftSaveIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
