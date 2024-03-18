import { useContext } from "react";
import { StormMessageInputSend } from "./send/main";
import { StormMessageInputVoice } from "./voice/main";
import { MessagesHandlerContext } from "@/(logic)/internal/handler/storm/messages/main";

export function StormChatInputRight() {
  const messagesHandler = useContext(MessagesHandlerContext)

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      {/* <StormMessageInputVoice /> */}
      <StormMessageInputSend
        onClick={(e) => {
          messagesHandler.messageActions
            .queryCreateUserMessage(messagesHandler.inputMessage)
            .then((userMessage: any) =>
              messagesHandler.messageActions.addUserMessage(userMessage),
            )
            .then((agentInputMessage) =>
              messagesHandler.messageActions.queryCreateAgentMessage(agentInputMessage),
            )
            .then((agentMessage: any) =>
              messagesHandler.messageActions.addAgentMessage(agentMessage),
            );
          messagesHandler.messageActions.updateInputMessage('');
        }}
      />
    </div>
  );
}
