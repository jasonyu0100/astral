import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterUpdateList } from '@/(server)/(controller)/space/chapter/update/list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceSeaAddUpdateModal } from '../../(modal)/add/update/main';
import { SpaceSeaSidebarEntry } from './entry/main';

export function SpaceSeaSidebar() {
  const openableController = useControllerForOpenable();
  const updateListController = useContext(ContextForChapterUpdateList);

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSeaAddUpdateModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceSeaSidebar.name}
        sizeFx='w-[300px] h-full flex-shrink-0'
        className={`flex flex-col space-y-[1rem] p-[1rem] `}
        glassFx={glassFx['glass-5']}
      >
        <div className='flex w-full flex-col space-y-[1rem] overflow-auto'>
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
