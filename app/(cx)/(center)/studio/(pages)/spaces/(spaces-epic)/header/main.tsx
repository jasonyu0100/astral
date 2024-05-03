import { glassFx, borderFx, containerFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { SpacesModalContext } from '@/(cx)/(center)/(modals)/studio/main';
import { useContext } from 'react';
import { SpacesHeaderAction } from './action/main';
import { SpacesAlbumInfo } from './album-info/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';

export function SpacesHeader() {
  const spacesModal = useContext(SpacesModalContext);
  return (
    <GlassWindowFrame className='w-full p-[4rem]' name={SpacesHeader.name}>
      <GlassWindowContents className="flex flex-row items-center">
        <SpacesAlbumInfo />
        <SpacesHeaderAction
          onClick={() => {
            spacesModal.createSpaceModal.open();
          }}
        />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']}/>
    </GlassWindowFrame>
  );
}
