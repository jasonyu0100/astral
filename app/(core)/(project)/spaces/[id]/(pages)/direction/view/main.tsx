import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesDirection,
  SpacesDirectionSidebarVisibility,
} from '../controller/main';
import { SpacesDirectionMain } from './main/main';
import { SpacesDirectionSidebar } from './sidebar/main';

export function SpacesDirectionView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesDirection);

  return (
    <GlassAreaContainer
      name={SpacesDirectionView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesDirectionSidebarVisibility.CLOSED && (
        <SpacesDirectionSidebar />
      )}
      <SpacesDirectionMain />
    </GlassAreaContainer>
  );
}
