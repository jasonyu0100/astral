'use client';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarVisibility,
} from '../controller/main';
import { SpacesChatMain } from './main/main';
import { SpacesChatSidebar } from './sidebar/main';

export function SpacesChatView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesChat);

  return (
    <GlassAreaContainer
      name={SpacesChatView.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesChatSidebarVisibility.CLOSED && (
        <SpacesChatSidebar />
      )}
      <SpacesChatMain />
    </GlassAreaContainer>
  );
}
