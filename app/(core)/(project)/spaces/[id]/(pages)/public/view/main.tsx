import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPublic,
  SpacesPublicSidebarVisibility,
} from '../controller/main';
import { SpacesPublicMain } from './main/main';
import { SpacesPublicSidebar } from './sidebar/main';

export function SpacesPublicView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesPublic);

  return (
    <GlassAreaContainer
      name={SpacesPublicView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesPublicSidebarVisibility.CLOSED && (
        <SpacesPublicSidebar />
      )}
      <SpacesPublicMain />
    </GlassAreaContainer>
  );
}
