'use client';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpacesSpace,
  SpacesSpaceSidebarVisibility,
} from '../controller/main';
import { SpacesSpaceMain } from './main/main';
import { SpacesSpaceSidebar } from './sidebar/main';

export function SpacesSpaceView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesSpace);

  return (
    <GlassAreaContainer
      name={SpacesSpaceView.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesSpaceSidebarVisibility.CLOSED && (
        <SpacesSpaceSidebar />
      )}
      <SpacesSpaceMain />
    </GlassAreaContainer>
  );
}
