import { useContext, useState } from "react";
import { StormContext } from "../../../../page";
import { StormMessageInputSend } from "./send/main";
import { StormMessageInputVoice } from "./voice/main";

export function StormChatInputRight() {
  const { inputMessage, messageHandler } = useContext(StormContext);

  return (
    <div className='flex h-[50px] w-[150px] flex-shrink-0 flex-row items-center justify-evenly'>
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
          messageHandler.updateInputMessage('');
        }}
      />
    </div>
  );
}
