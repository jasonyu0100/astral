import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpacesHeaderAdd } from './add/main';
import { SpacesAlbumInfo } from './album-info/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';

export function SpacesHeader() {
  const openableController = useControllerForOpenable();

  return (
    <>
    <ContextForOpenable.Provider value={openableController}>
      
      <GlassWindowFrame
        className='w-full px-[4rem] py-[2rem]'
        name={SpacesHeader.name}
      >
        <GlassWindowContents className='flex flex-row items-center'>
          <SpacesAlbumInfo />
          <SpacesHeaderAdd
            onClick={() => {
              openableController.open();
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </ContextForOpenable.Provider>
    </>
  );
}
