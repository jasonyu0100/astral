import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { glassFx } from '@/(style)/data';
import { SpaceSeaAddUpdateModal } from '../../(modal)/add/update/main';
import { SpaceSeaSidebarAdd } from './add/main';
import { SpaceSeaSidebarEntry } from './entry/main';

export function SpaceSeaSidebar() {
  const openableController = useControllerForOpenable();

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
          <SpaceSeaSidebarAdd onClick={openableController.open} />
          <HorizontalDivider />
          <SpaceSeaSidebarEntry>
            <p className='text-xl font-bold text-slate-300'>Initial Work</p>
            <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
          </SpaceSeaSidebarEntry>
          <SpaceSeaSidebarEntry>
            <p className='text-xl font-bold text-slate-300'>Initial Work</p>
            <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
          </SpaceSeaSidebarEntry>
          <SpaceSeaSidebarEntry>
            <p className='text-xl font-bold text-slate-300'>Initial Work</p>
            <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
          </SpaceSeaSidebarEntry>
        </div>
      </GlassAreaContainer>
    </>
  );
}
