import { useContext } from "react";
import { StormMessageInputSend } from "./send/main";
import { MessagesHandlerContext } from "@/(model)/(controller)/(archive)/storm/messages/main";

export function StormChatInputRight() {
  const messagesHandler = useContext(MessagesHandlerContext)

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      {/* <StormMessageInputVoice /> */}
      <StormMessageInputSend
        onClick={(e) => {
          messagesHandler.messageActions
            .createMessageFromUser(messagesHandler.inputMessage)
            .then((agentInputMessage) =>
              messagesHandler.messageActions.createMessageFromAgent(agentInputMessage),
            )
          messagesHandler.messageActions.updateInputMessage('');
        }}
      />
    </div>
  );
}
