import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesFocus,
  SpacesFocusSidebarVisibility,
} from '../controller/main';
import { SpacesFocusMain } from './main/main';
import { SpacesFocusSidebar } from './sidebar/main';

export function SpacesFocusView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesFocus);

  return (
    <GlassAreaContainer
      name={SpacesFocusView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      roundedFx={roundedFx['rounded-container']}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
    >
      {sidebarVisibility !== SpacesFocusSidebarVisibility.CLOSED && (
        <SpacesFocusSidebar />
      )}
      <SpacesFocusMain />
    </GlassAreaContainer>
  );
}
