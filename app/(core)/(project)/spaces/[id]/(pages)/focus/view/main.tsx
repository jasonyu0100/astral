import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesWork,
  SpacesWorkSidebarVisibility,
} from '../controller/main';
import { SpacesWorkMain } from './main/main';
import { SpacesWorkSidebar } from './sidebar/main';

export function SpacesWorkView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesWork);

  return (
    <GlassAreaContainer
      name={SpacesWorkView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesWorkSidebarVisibility.CLOSED && (
        <SpacesWorkSidebar />
      )}
      <SpacesWorkMain />
    </GlassAreaContainer>
  );
}
