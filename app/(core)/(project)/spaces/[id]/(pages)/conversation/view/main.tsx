'use client';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpacesConversation,
  SpacesConversationSidebarVisibility,
} from '../controller/main';
import { SpacesConversationMain } from './main/main';
import { SpacesConversationSidebar } from './sidebar/main';

export function SpacesConversationView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesConversation);

  return (
    <GlassAreaContainer
      name={SpacesConversationView.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesConversationSidebarVisibility.CLOSED && (
        <SpacesConversationSidebar />
      )}
      <SpacesConversationMain />
    </GlassAreaContainer>
  );
}
