'use client';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
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
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceChatSidebar />
      <SpaceChatMain />
    </GlassAreaContainer>
  );
}
