import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesView,
  SpacesViewSidebarVisibility,
} from '../controller/main';
import { SpacesViewMain } from './main/main';
import { SpacesViewSidebar } from './sidebar/main';

export function SpacesViewView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesView);

  return (
    <GlassAreaContainer
      name={SpacesViewView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesViewSidebarVisibility.CLOSED && (
        <SpacesViewSidebar />
      )}
      <SpacesViewMain />
    </GlassAreaContainer>
  );
}
