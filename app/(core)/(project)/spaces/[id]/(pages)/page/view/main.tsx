import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPage,
  SpacesPageSidebarVisibility,
} from '../controller/main';
import { SpacesPageMain } from './main/main';
import { SpacesPageSidebar } from './sidebar/main';

export function SpacesPageView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesPage);

  return (
    <GlassAreaContainer
      name={SpacesPageView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <SpacesPageMain />
      {sidebarVisibility !== SpacesPageSidebarVisibility.CLOSED && (
        <SpacesPageSidebar />
      )}
    </GlassAreaContainer>
  );
}
