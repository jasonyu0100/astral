import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import {
  ContextForSpaceProgressController,
  SpaceProgressPage,
} from '../../../controller/space-session/main';

export function SpaceProgressSidebarCurrentSession() {
  const spaceSessionController = useContext(ContextForSpaceProgressController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <>
      <GlassWindowFrame
        name={SpaceProgressSidebarCurrentSession.name}
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
        className='flex- flex cursor-pointer p-[1rem]'
      >
        <GlassWindowContents
          className='flex cursor-pointer flex-col space-y-[0.5rem]'
          onClick={() =>
            spaceSessionController.setPage(SpaceProgressPage.COMPLETE_SESSION)
          }
        >
          <p className='text-xs font-light text-slate-500'>
            {new Date().toDateString()}
          </p>
          <p className='text-lg font-bold text-slate-300'>Current Session</p>
          <p className='text-sm font-bold text-slate-500'>
            {updateListController.state.objs.length} updates
          </p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </>
  );
}
