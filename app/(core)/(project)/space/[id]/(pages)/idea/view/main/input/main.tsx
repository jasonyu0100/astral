import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/chat/conversation/message/list';
import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { useContext } from 'react';
import { SpaceIdeaInputLeft } from './left/main';
import { SpaceIdeaInputRight } from './right/main';
import { SpaceIdeaInputText } from './text/main';

export function SpaceIdeaInput() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <GlassAreaContainer
      name={SpaceIdeaInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center px-[1rem]`}
    >
      <SpaceIdeaInputLeft />
      <SpaceIdeaInputText
        onChange={(e) =>
          messageListController.actions.stateActions.updateInputMessageText(
            e.target.value,
          )
        }
        value={messageListController.state.more.inputMessageText}
      />
      <SpaceIdeaInputRight />
    </GlassAreaContainer>
  );
}
