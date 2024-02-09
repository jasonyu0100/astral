'use client';
import { StormHeader } from './storm-epic/center/header/main';
import { StormChat } from './storm-epic/center/chat/main';
import { StormChatInput } from './storm-epic/center/input/main';
import { StormSidebar } from './storm-epic/sidebar/main';
import { StormWrapper } from './storm-epic/main';
import { StormMain } from './storm-epic/center/main';
import { StormChatMessages } from './storm-epic/center/chat/messages/main';
import { StormModalView } from '../../../../../(modals)/storm-modal/view';

export function StormView() {
  return (
    <StormWrapper>
      <StormModalView />
      <StormMain>
        <StormChat>
          <StormHeader />
          <StormChatMessages/>
        </StormChat>
        <StormChatInput/>
      </StormMain>
      <StormSidebar />
    </StormWrapper>
  );
}
