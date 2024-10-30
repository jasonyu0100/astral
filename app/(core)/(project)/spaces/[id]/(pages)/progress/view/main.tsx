import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesProgress,
  SpacesProgressSidebarVisibility,
} from '../controller/main';
import { SpacesProgressMain } from './main/main';
import { SpacesProgressSidebar } from './sidebar/main';

export function SpacesProgressView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesProgress);

  return (
    <GlassAreaContainer
      name={SpacesProgressView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesProgressSidebarVisibility.CLOSED && (
        <SpacesProgressSidebar />
      )}
      <SpacesProgressMain />
    </GlassAreaContainer>
  );
}
