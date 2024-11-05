import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpaceSpace,
  SpaceSpaceSidebarVisibility,
} from '../controller/main';
import { SpaceSpaceMain } from './main/main';
import { SpaceSpaceSidebar } from './sidebar/main';

export function SpaceSpaceView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpaceSpace);

  return (
    <GlassAreaContainer
      name={SpaceSpaceView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpaceSpaceSidebarVisibility.CLOSED && (
        <SpaceSpaceSidebar />
      )}
      <SpaceSpaceMain />
    </GlassAreaContainer>
  );
}
