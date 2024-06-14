import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceStormInputLeft } from './left/main';
import { SpaceStormInputRight } from './right/main';
import { SpaceStormInputText } from './text/main';

export function SpaceStormInput() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <GlassAreaContainer
      name={SpaceStormInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center px-[1rem]`}
    >
      <SpaceStormInputLeft />
      <SpaceStormInputText
        onChange={(e) =>
          messageListController.actions.stateActions.updateInputMessageText(
            e.target.value,
          )
        }
        value={messageListController.state.more.inputMessageText}
      />
      <SpaceStormInputRight />
    </GlassAreaContainer>
  );
}
