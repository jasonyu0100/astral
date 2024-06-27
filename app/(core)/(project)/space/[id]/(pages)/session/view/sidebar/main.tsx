import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ContextForChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForSpaceSessionController } from '../../(controller)/space-session/main';
import { SpaceSessionAddUpdateModal } from '../../(modal)/add/update/main';
import { SpaceSessionSidebarEntrySession } from './entry/session/main';
import { SpaceSessionSidebarEntryUpdate } from './entry/update/main';

export function SpaceSessionSidebar() {
  const openableController = useControllerForOpenable();
  const sessionListController = useContext(ContextForChapterSessionList);
  const updateListController = useContext(ContextForChapterSessionUpdateList);
  const spaceSessionController = useContext(ContextForSpaceSessionController);

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSessionAddUpdateModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceSessionSidebar.name}
        sizeFx='w-[300px] h-full flex-shrink-0'
        className={`flex flex-col space-y-[1rem] overflow-auto p-[1rem] `}
        glassFx={glassFx['glass-5']}
      >
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='font-bold text-slate-300'>Updates</p>
          {updateListController.state.objs.length === 0 && (
            <p className='text-sm font-bold text-slate-500'>
              No updates available
            </p>
          )}
          {updateListController.state.objs.map((update) => (
            <ContextForChapterSessionUpdateObj.Provider value={update}>
              <SpaceSessionSidebarEntryUpdate />
            </ContextForChapterSessionUpdateObj.Provider>
          ))}
          <HorizontalDivider />
          <p className='font-bold text-slate-300'>Sessions</p>
          {sessionListController.state.objs.length === 0 && (
            <p className='text-sm font-bold text-slate-500'>
              No sessions recorded
            </p>
          )}
          {sessionListController.state.objs.map((session) => (
            <ContextForChapterSessionObj.Provider value={session}>
              <SpaceSessionSidebarEntrySession />
            </ContextForChapterSessionObj.Provider>
          ))}
        </div>
      </GlassAreaContainer>
    </>
  );
}
