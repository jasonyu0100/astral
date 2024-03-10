import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { SpacesModalContext } from '@/(modals)/(studio)/studio/main';
import { useContext } from 'react';
import { SpacesHeaderAction } from './action/main';
import { SpacesAlbumInfo } from './album-info/main';

export function SpacesHeader() {
  const spacesModal = useContext(SpacesModalContext);
  return (
    <GlassContainer
      sizeStyle='w-full h-[360px]'
      displayName={SpacesHeader.name}
      glassStyle={backgroundStyles['glass-5']}
      borderStyle={borderStyles['border-b']}
      className={`p-[4rem] ${containerStyles['row-center']}`}
    >
      <SpacesAlbumInfo />
      <SpacesHeaderAction
        onClick={() => {
          spacesModal.createSpaceModal.open();
        }}
      />
    </GlassContainer>
  );
}
