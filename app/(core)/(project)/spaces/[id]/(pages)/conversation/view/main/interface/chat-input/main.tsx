import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { ContextForSpacesConversation } from '../../../../controller/main';

export function SpacesConversationInputText() {
  const hoverableController = useControllerForHoverable();
  const messageListController = useContext(ContextForConversationMessageList);

  const spacesConversationController = useContext(ContextForSpacesConversation);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      spacesConversationController.actions.sendMessageToConversation();
    }
  };

  return (
    <GlassAreaContainer
      name={SpacesConversationInputText.name}
      sizeFx='max-w-[600px] flex-grow h-[3.5rem]'
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
