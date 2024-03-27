import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { SpacesModalContext } from '@/(modals)/(studio)/studio/main';
import { useContext } from 'react';
import { SpacesHeaderAction } from './action/main';
import { SpacesAlbumInfo } from './album-info/main';

export function SpacesHeader() {
  const spacesModal = useContext(SpacesModalContext);
  return (
    <GlassAreaContainer
      sizeStyle='w-full h-[360px]'
      displayName={SpacesHeader.name}
      glassStyle={glassStyles['glass-5']}
      className={`p-[4rem] ${containerStyles['row-center']}`}
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
