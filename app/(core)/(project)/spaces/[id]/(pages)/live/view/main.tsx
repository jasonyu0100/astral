import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesLive,
  SpacesLiveSidebarVisibility,
} from '../controller/main';
import { SpacesLiveMain } from './main/main';
import { SpacesLiveSidebar } from './sidebar/main';

export function SpacesLiveView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesLive);

  return (
    <GlassAreaContainer
      name={SpacesLiveView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesLiveSidebarVisibility.CLOSED && (
        <SpacesLiveSidebar />
      )}
      <SpacesLiveMain />
    </GlassAreaContainer>
  );
}
