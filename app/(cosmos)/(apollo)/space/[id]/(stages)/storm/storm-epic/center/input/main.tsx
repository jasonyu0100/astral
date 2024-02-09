import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { useContext, useState } from 'react';
import { StormContext } from '../../../page';
import { StormChatInputLeft } from './left/main';
import { StormChatInputRight } from './right/main';
import { StormMessageInputSend } from './right/send/main';
import { StormMessageInputVoice } from './right/voice/main';
import { StormChatMessageInput } from './text/main';

export function StormChatInput() {
  const { messageHandler } = useContext(StormContext);
  const [inputMessage, changeInputMessage] = useState('');

  return (
    <Layer
      displayName={StormChatInput.name}
      sizeStyle='h-[80px] w-full'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row-centered']} px-[1rem]`}
    >
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
    </Layer>
  );
}
