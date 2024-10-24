import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardSidebarVisibility,
} from '../controller/main';
import { SpacesBoardMain } from './main/main';
import { SpacesBoardSidebar } from './sidebar/main';

export function SpacesBoardView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesBoard);

  return (
    <GlassAreaContainer
      name={SpacesBoardView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesBoardSidebarVisibility.CLOSED && (
        <SpacesBoardSidebar />
      )}
      <SpacesBoardMain />
    </GlassAreaContainer>
  );
}
