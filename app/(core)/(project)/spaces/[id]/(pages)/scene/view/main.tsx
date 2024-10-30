import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesScene,
  SpacesSceneSidebarVisibility,
} from '../controller/main';
import { SpacesSceneMain } from './main/main';
import { SpacesSceneSidebar } from './sidebar/main';

export function SpacesSceneView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesScene);

  return (
    <GlassAreaContainer
      name={SpacesSceneView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesSceneSidebarVisibility.CLOSED && (
        <SpacesSceneSidebar />
      )}
      <SpacesSceneMain />
    </GlassAreaContainer>
  );
}
