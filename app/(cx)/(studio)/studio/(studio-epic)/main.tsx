'use client';

import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';
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
