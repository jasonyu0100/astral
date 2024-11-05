import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesLaunch,
  SpacesLaunchSidebarVisibility,
} from '../controller/main';
import { SpacesLaunchMain } from './main/main';
import { SpacesLaunchSidebar } from './sidebar/main';

export function SpacesLaunchView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesLaunch);

  return (
    <GlassAreaContainer
      name={SpacesLaunchView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesLaunchSidebarVisibility.CLOSED && (
        <SpacesLaunchSidebar />
      )}
      <SpacesLaunchMain />
    </GlassAreaContainer>
  );
}
