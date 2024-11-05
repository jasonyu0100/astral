import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesMission,
  SpacesMissionSidebarVisibility,
} from '../controller/main';
import { SpacesMissionMain } from './main/main';
import { SpacesMissionSidebar } from './sidebar/main';

export function SpacesMissionView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesMission);

  return (
    <GlassAreaContainer
      name={SpacesMissionView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesMissionSidebarVisibility.CLOSED && (
        <SpacesMissionSidebar />
      )}
      <SpacesMissionMain />
    </GlassAreaContainer>
  );
}
