import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import {
  ContextForPagable,
  useControllerForPagable,
} from '@/(logic)/contexts/pagination/main';
import { glassFx } from '@/(style)/data';
import { CreateSpaceModalView } from '../../(modal)/create-space/main';
import { StudioSpacesHeaderAdd } from './add/main';
import { StudioSpacesHeaderInfo } from './info/main';

export function StudioSpacesHeader() {
  const openableController = useControllerForOpenable();
  const pageableController = useControllerForPagable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <ContextForPagable.Provider value={pageableController}>
          <CreateSpaceModalView />
        </ContextForPagable.Provider>
      </ContextForOpenable.Provider>
      <GlassWindowFrame
        className='w-full px-[4rem] py-[2rem]'
        name={StudioSpacesHeader.name}
      >
        <GlassWindowContents className='flex flex-row items-center'>
          <StudioSpacesHeaderInfo />
          <StudioSpacesHeaderAdd
            onClick={() => {
              openableController.open();
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </>
  );
}
