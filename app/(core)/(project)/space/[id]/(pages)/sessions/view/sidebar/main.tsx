import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ContextForChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForSpaceSessionsController } from '../../(controller)/space-session/main';
import { SpaceSessionsAddUpdateModal } from '../../(modal)/add/update/main';
import { SpaceSessionsSidebarEntrySession } from './entry/session/main';

export function SpaceSessionsSidebar() {
  const openableController = useControllerForOpenable();
  const sessionListController = useContext(ContextForChapterSessionList);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);
  const spaceSessionController = useContext(ContextForSpaceSessionsController);

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSessionsAddUpdateModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceSessionsSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <div className='flex h-[4rem] w-full items-center justify-center p-[1rem] shadow-glow'>
          <GlassWindowFrame
            className='h-[2rem] w-full flex-shrink-0'
            roundedFx={roundedFx['rounded']}
          >
            <GlassWindowContents className='h-full w-full'>
              <input
                className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
                placeholder='Venture forth...'
              ></input>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <GlassAreaContainer
            sizeFx='h-full w-full'
            className='flex flex-col overflow-auto p-[1rem]'
            name={''}
          >
            <div className='flex w-full flex-col space-y-[1rem]'>
              {/* <p className='font-bold text-slate-300'>Updates</p>
          {updateListController.state.objs.length === 0 && (
            <p className='text-sm font-bold text-slate-500'>
              No updates available
            </p>
          )}
          {updateListController.state.objs.map((update) => (
            <ContextForChapterSessionUpdateObj.Provider value={update}>
              <SpaceSessionsSidebarEntryUpdate />
            </ContextForChapterSessionUpdateObj.Provider>
          ))}
          <HorizontalDivider /> */}
              {sessionListController.state.objs.length === 0 && (
                <p className='text-sm font-bold text-slate-500'>
                  No sessions recorded
                </p>
              )}
              {sessionListController.state.objs.map((session) => (
                <ContextForChapterSessionObj.Provider value={session}>
                  <SpaceSessionsSidebarEntrySession />
                </ContextForChapterSessionObj.Provider>
              ))}
            </div>
          </GlassAreaContainer>
        </div>
      </GlassAreaContainer>
    </>
  );
}
