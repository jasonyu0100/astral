'use client';

import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { SpacesHeader } from './header/main';
import { SpacesList } from './list/main';

export function StudioSpacesMain() {
  return (
    <GlassAreaContainer
      name={StudioSpacesMain.name}
      size='h-full flex-grow'
      glass={glassStyles['glass-5']}
      className={`overflow-auto ${containerStyles.col}`}
      rounded={roundedStyles['rounded-container-sm']}
    >
      <SpacesHeader />
      <SpacesList />
    </GlassAreaContainer>
  );
}
