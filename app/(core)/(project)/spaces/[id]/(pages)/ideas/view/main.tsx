import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesIdeas,
  SpacesIdeasSidebarVisibility,
} from '../controller/main';
import { SpacesIdeasMain } from './main/main';
import { SpacesIdeasSidebar } from './sidebar/main';

export function SpacesIdeasView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesIdeas);

  return (
    <GlassAreaContainer
      name={SpacesIdeasView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      roundedFx={roundedFx['rounded-container']}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
    >
      {sidebarVisibility !== SpacesIdeasSidebarVisibility.CLOSED && (
        <SpacesIdeasSidebar />
      )}
      <SpacesIdeasMain />
    </GlassAreaContainer>
  );
}
