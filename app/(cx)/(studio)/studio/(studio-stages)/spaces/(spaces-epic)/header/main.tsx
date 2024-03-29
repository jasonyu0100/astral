import {
  glassFx,
  borderFx,
  containerFx,
} from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpacesModalContext } from '@/(modals)/(studio)/studio/main';
import { useContext } from 'react';
import { SpacesHeaderAction } from './action/main';
import { SpacesAlbumInfo } from './album-info/main';

export function SpacesHeader() {
  const spacesModal = useContext(SpacesModalContext);
  return (
    <GlassAreaContainer
      sizeFx='w-full h-[360px]'
      name={SpacesHeader.name}
      glassFx={glassFx['glass-5']}
      className={`p-[4rem] ${containerFx['row-center']}`}
    >
      <SpacesAlbumInfo />
      <SpacesHeaderAction
        onClick={() => {
          spacesModal.createSpaceModal.open();
        }}
      />
    </GlassAreaContainer>
  );
}
