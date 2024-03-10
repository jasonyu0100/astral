'use client';

import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { SpacesHeader } from './header/main';
import { SpacesList } from './list/main';

export function StudioSpaces() {
  return (
    <GlassContainer
      displayName={StudioSpaces.name}
      sizeStyle='h-full flex-grow'
      glassStyle={backgroundStyles['glass-5']}
      className={`overflow-auto ${containerStyles.col}`}
    >
      <SpacesHeader />
      <SpacesList />
    </GlassContainer>
  );
}
