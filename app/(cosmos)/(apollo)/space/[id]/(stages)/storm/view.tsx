'use client';
import { StormHeader } from './storm-epic/center/header/main';
import { StormChat } from './storm-epic/center/chat/main';
import { StormChatInput } from './storm-epic/center/input/main';
import { StormSidebar } from './storm-sidebar-epic/main';
import { StormWrapper } from './storm-epic/main';
import { StormMain } from './storm-epic/center/main';
import { StormChatInputLeft } from './storm-epic/center/input/left/main';
import { StormChatMessageInput } from './storm-epic/center/input/text/main';
import { StormChatInputRight } from './storm-epic/center/input/right/main';
import { StormMessageInputSend } from './storm-epic/center/input/right/send/main';
import { StormMessageInputVoice } from './storm-epic/center/input/right/voice/main';
import { useContext, useState } from 'react';
import { StormChatMessages } from './storm-epic/center/chat/messages/main';
import { StormContext } from './page';
import { StormMessage } from './storm-epic/center/chat/messages/message/main';
import { StormModalsView } from '../../../../../(modals)/storm-modal/view';

export function StormView() {
  const { messages, messageHandler } = useContext(StormContext);
  const [inputMessage, changeInputMessage] = useState('');

  return (
    <StormWrapper>
      <StormModalsView />
      <StormMain>
        <StormChat>
          <StormHeader />
          <StormChatMessages>
            {messages.map((message) => (
              <StormMessage message={message} />
            ))}
          </StormChatMessages>
        </StormChat>
        <StormChatInput>
          <StormChatInputLeft />
          <StormChatMessageInput
            onChange={(e) => changeInputMessage(e.target.value)}
            value={inputMessage}
          />
          <StormChatInputRight>
            <StormMessageInputVoice />
            <StormMessageInputSend
              onClick={(e) => {
                messageHandler
                  .queryCreateUserMessage(inputMessage)
                  .then((userMessage: any) =>
                    messageHandler.addUserMessage(userMessage),
                  )
                  .then((agentInputMessage) =>
                    messageHandler.queryCreateAgentMessage(agentInputMessage),
                  )
                  .then((agentMessage: any) =>
                    messageHandler.addAgentMessage(agentMessage),
                  );
                changeInputMessage('');
              }}
            />
          </StormChatInputRight>
        </StormChatInput>
      </StormMain>
      <StormSidebar />
    </StormWrapper>
  );
}
