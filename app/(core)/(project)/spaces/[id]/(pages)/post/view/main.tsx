import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPost,
  SpacesPostSidebarVisibility,
} from '../controller/main';
import { SpacesPostMain } from './main/main';
import { SpacesPostSidebar } from './sidebar/main';

export function SpacesPostView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesPost);

  return (
    <GlassAreaContainer
      name={SpacesPostView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesPostSidebarVisibility.CLOSED && (
        <SpacesPostSidebar />
      )}
      <SpacesPostMain />
    </GlassAreaContainer>
  );
}
