import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPages,
  SpacesPagesSidebarVisibility,
} from '../controller/main';
import { SpacesPagesMain } from './main/main';
import { SpacesPagesSidebar } from './sidebar/main';

export function SpacesPagesView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesPages);

  return (
    <GlassAreaContainer
      name={SpacesPagesView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <SpacesPagesMain />
      {sidebarVisibility !== SpacesPagesSidebarVisibility.CLOSED && (
        <SpacesPagesSidebar />
      )}
    </GlassAreaContainer>
  );
}
