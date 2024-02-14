import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';
import { SpacesModalContext } from '@/(cosmos)/(modals)/space-modal/main';
import { useContext } from 'react';
import { SpacesHeaderAction } from './action/main';
import { SpacesAlbumInfo } from './album-info/main';

export function SpacesHeader() {
  const { createSpaceModal: createSpace } = useContext(SpacesModalContext);
  return (
    <Layer
      sizeStyle='w-full h-[360px]'
      displayName={SpacesHeader.name}
      backgroundStyle={backgroundStyles['glass-5']}
      borderStyle={borderStyles['border-b']}
      className={`p-[4rem] ${containerStyles['row-center']}`}
    >
      <SpacesAlbumInfo />
      <SpacesHeaderAction
        onClick={() => {
          createSpace.open();
        }}
      />
    </Layer>
  );
}
