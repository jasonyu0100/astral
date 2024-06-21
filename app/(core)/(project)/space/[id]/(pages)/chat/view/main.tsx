'use client';
import { SpaceChatContainer } from './container/main';
import { SpaceChatMain } from './main/main';
import { SpaceChatSidebar } from './sidebar/main';

export function SpaceChatView() {
  return (
    <SpaceChatContainer>
      <SpaceChatSidebar />
      <SpaceChatMain />
    </SpaceChatContainer>
  );
}
