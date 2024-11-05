'use client';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesChannel,
  SpacesChannelSidebarVisibility,
} from '../controller/main';
import { SpacesChannelMain } from './main/main';
import { SpacesChannelSidebar } from './sidebar/main';

export function SpacesChannelView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesChannel);

  return (
    <GlassAreaContainer
      name={SpacesChannelView.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesChannelSidebarVisibility.CLOSED && (
        <SpacesChannelSidebar />
      )}
      <SpacesChannelMain />
    </GlassAreaContainer>
  );
}
