import { useContext } from "react";
import { StormMessageInputSend } from "./send/main";
import { ContextForConversationMessageList } from "@/(model)/(controller)/space/chapter/chat/conversation/message/list";
import { useGlobalUser } from "@/(logic)/internal/store/user/main";

export function StormChatInputRight() {
  const user = useGlobalUser(state => state.user);
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      {/* <StormMessageInputVoice /> */}
      <StormMessageInputSend
        onClick={(e) => {
          messageListController.actions.createActions.sendMessage(user.id)
        }}
      />
    </div>
  );
}
