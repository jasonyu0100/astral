import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { ContextForSpacesSpace } from '../../../../controller/main';

export function SpacesSpaceInputText() {
  const hoverableController = useControllerForHoverable();
  const messageListController = useContext(ContextForConversationMessageList);

  const {
    actions: { sendMessageIntoConversation: triggerMessageSendToConversation },
  } = useContext(ContextForSpacesSpace);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerMessageSendToConversation();
    }
  };

  return (
    <GlassAreaContainer
      name={SpacesSpaceInputText.name}
      sizeFx='max-w-[600px] flex-grow h-[50px]'
      glassFx={`${hoverableController.hovered ? glassFx['glass-20'] : glassFx['glass-10']}`}
      roundedFx={roundedFx['rounded-full']}
      onMouseOver={() => hoverableController.onHover()}
      onMouseLeave={() => hoverableController.onUnhover()}
      borderFx={borderFx['border-around']}
    >
      <input
        className={`h-full w-full animate-pulse-slow bg-transparent px-[2rem] font-light text-slate-300 outline-none`}
        placeholder='Type a message...'
        onKeyDown={handleKeyDown}
        onChange={(e) =>
          messageListController.actions.stateActions.updateInputMessageText(
            e.target.value,
          )
        }
        value={messageListController.state.more.inputMessageText}
      />
    </GlassAreaContainer>
  );
}
