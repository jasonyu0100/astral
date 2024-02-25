import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';
import { SpacesModalContext } from '@/(modals)/space-modal/main';
import { useContext } from 'react';
import { SpacesHeaderAction } from './action/main';
import { SpacesAlbumInfo } from './album-info/main';

export function SpacesHeader() {
  const { createSpaceModal: createSpace } = useContext(SpacesModalContext);
  return (
    <Glass
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
    </Glass>
  );
}
