'use client';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpaceChat,
  SpaceChatSidebarVisibility,
} from '../controller/main';
import { SpaceChatMain } from './main/main';
import { SpaceChatSidebar } from './sidebar/main';

export function SpaceChatView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpaceChat);

  return (
    <GlassAreaContainer
      name={SpaceChatView.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpaceChatSidebarVisibility.CLOSED && (
        <SpaceChatSidebar />
      )}
      <SpaceChatMain />
    </GlassAreaContainer>
  );
}
