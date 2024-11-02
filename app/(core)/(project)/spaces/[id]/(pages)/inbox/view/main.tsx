import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpaceInbox,
  SpaceInboxSidebarVisibility,
} from '../controller/main';
import { SpaceInboxMain } from './main/main';
import { SpaceInboxSidebar } from './sidebar/main';

export function SpaceInboxView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpaceInbox);

  return (
    <GlassAreaContainer
      name={SpaceInboxView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpaceInboxSidebarVisibility.CLOSED && (
        <SpaceInboxSidebar />
      )}
      <SpaceInboxMain />
    </GlassAreaContainer>
  );
}
