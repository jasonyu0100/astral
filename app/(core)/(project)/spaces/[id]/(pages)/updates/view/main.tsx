import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPosts,
  SpacesPostsSidebarVisibility,
} from '../controller/main';
import { SpacesPostsMain } from './main/main';
import { SpacesPostsSidebar } from './sidebar/main';

export function SpacesPostsView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesPosts);

  return (
    <GlassAreaContainer
      name={SpacesPostsView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      roundedFx={roundedFx['rounded-container']}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
    >
      {sidebarVisibility !== SpacesPostsSidebarVisibility.CLOSED && (
        <SpacesPostsSidebar />
      )}
      <SpacesPostsMain />
    </GlassAreaContainer>
  );
}
