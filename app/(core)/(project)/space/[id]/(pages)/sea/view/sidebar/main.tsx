import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx } from '@/(style)/data';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { SpaceSeaAddUpdateModal } from '../../(modal)/add/update/main';
import { SpaceSeaSidebarEntry } from './entry/main';

export function SpaceSeaSidebar() {
  const openableController = useControllerForOpenable();
  const updateListController = useContext(ContextForChapterSessionList);
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSeaAddUpdateModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceSeaSidebar.name}
        sizeFx='w-[300px] h-full flex-shrink-0'
        className={`flex flex-col space-y-[1rem] overflow-auto p-[1rem] `}
        glassFx={glassFx['glass-5']}
      >
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='font-bold text-slate-300'>Updates</p>
          {sessionUpdateListController.state.objs.length === 0 && (
            <p className='text-sm font-bold text-slate-500'>
              No updates available
            </p>
          )}
          {sessionUpdateListController.state.objs.map((item) => (
            <SpaceSeaSidebarEntry>
              <p className='text-xl font-bold text-slate-300'>
                {item.variant.toLowerCase()} update
              </p>
              <p className='font-bold text-slate-500'>
                {getFormattedAMPM(new Date(item.created))}
              </p>
            </SpaceSeaSidebarEntry>
          ))}
          <HorizontalDivider />
          <p className='font-bold text-slate-300'>Sessions</p>
          {updateListController.state.objs.length === 0 && (
            <p className='text-sm font-bold text-slate-500'>
              No sessions recorded
            </p>
          )}
          {updateListController.state.objs.map((update) => (
            <SpaceSeaSidebarEntry>
              <p className='text-xl font-bold text-slate-300'>{update.title}</p>
              <p className='font-bold text-slate-500'>
                {new Date(update.created).toLocaleDateString()}
              </p>
            </SpaceSeaSidebarEntry>
          ))}
        </div>
      </GlassAreaContainer>
    </>
  );
}
