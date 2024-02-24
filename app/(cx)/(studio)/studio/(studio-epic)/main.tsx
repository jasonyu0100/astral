'use client';

import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import { Glass } from '@/(components)/glass/main';
import { SpacesHeader } from './header/main';
import { SpacesList } from './list/main';

export function SpacesContainer() {
  return (
    <Glass
      displayName={SpacesContainer.name}
      sizeStyle='h-full flex-grow'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`overflow-auto ${containerStyles.col}`}
    >
      <SpacesHeader />
      <SpacesList />
    </Glass>
  );
}
