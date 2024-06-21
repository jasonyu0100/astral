import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceChatInputLeft } from './left/main';
import { SpaceChatInputRight } from './right/main';
import { SpaceChatInputText } from './text/main';

export function SpaceChatInput() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <GlassAreaContainer
      name={SpaceChatInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center px-[1rem]`}
    >
      <SpaceChatInputLeft />
      <SpaceChatInputText
        onChange={(e) =>
          messageListController.actions.stateActions.updateInputMessageText(
            e.target.value,
          )
        }
        value={messageListController.state.more.inputMessageText}
      />
      <SpaceChatInputRight />
    </GlassAreaContainer>
  );
}
