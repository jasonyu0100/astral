'use client';

import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';
import { SpacesHeader } from './header/main';
import { SpacesList } from './list/main';

export function SpacesContainer() {
  return (
    <Layer
      displayName={SpacesContainer.name}
      sizeStyle='h-full flex-grow'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`overflow-auto ${containerStyles.col}`}
    >
      <SpacesHeader />
      <SpacesList />
    </Layer>
  );
}
