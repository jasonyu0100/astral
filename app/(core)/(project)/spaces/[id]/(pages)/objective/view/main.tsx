import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesObjective,
  SpacesObjectiveSidebarVisibility,
} from '../controller/main';
import { SpacesObjectiveMain } from './main/main';
import { SpacesObjectiveSidebar } from './sidebar/main';

export function SpacesObjectiveView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesObjective);

  return (
    <GlassAreaContainer
      name={SpacesObjectiveView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesObjectiveSidebarVisibility.CLOSED && (
        <SpacesObjectiveSidebar />
      )}
      <SpacesObjectiveMain />
    </GlassAreaContainer>
  );
}
