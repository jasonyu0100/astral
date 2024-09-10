'use client';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceChatMain } from './main/main';
import { SpaceChatSidebar } from './sidebar/main';

export function SpaceChatView() {
  return (
    <GlassAreaContainer
      name={SpaceChatView.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <SpaceChatSidebar />
      <SpaceChatMain />
    </GlassAreaContainer>
  );
}
