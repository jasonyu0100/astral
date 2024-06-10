import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { StormChatInputLeft } from './left/main';
import { StormChatInputRight } from './right/main';
import { StormChatMessageInput } from './text/main';
import { useContext } from 'react';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';

export function StormChatInput() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <GlassAreaContainer
      name={StormChatInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center px-[1rem]`}
    >
      <StormChatInputLeft />
      <StormChatMessageInput
        onChange={(e) =>
          messageListController.actions.stateActions.updateMessageText(
            e.target.value,
          )
        }
        value={messageListController.state.more.messageText}
      />
      <StormChatInputRight />
    </GlassAreaContainer>
  );
}
