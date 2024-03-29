'use client';

import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { SpacesHeader } from './header/main';
import { SpacesList } from './list/main';

export function StudioSpacesMain() {
  return (
    <GlassAreaContainer
      displayName={StudioSpacesMain.name}
      sizeStyle='h-full flex-grow'
      glassStyle={glassStyles['glass-5']}
      className={`overflow-auto ${containerStyles.col}`}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      <SpacesHeader />
      <SpacesList />
    </GlassAreaContainer>
  );
}
