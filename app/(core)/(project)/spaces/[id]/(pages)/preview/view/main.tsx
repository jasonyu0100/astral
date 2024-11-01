import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPreview,
  SpacesPreviewSidebarVisibility,
} from '../controller/main';
import { SpacesPreviewMain } from './main/main';
import { SpacesPreviewSidebar } from './sidebar/main';

export function SpacesPreviewView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesPreview);

  return (
    <GlassAreaContainer
      name={SpacesPreviewView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesPreviewSidebarVisibility.CLOSED && (
        <SpacesPreviewSidebar />
      )}
      <SpacesPreviewMain />
    </GlassAreaContainer>
  );
}
