import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/conversation/message/list';
import { AstralSendIcon } from '@/icons/send/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForConversationalSearch } from '../../controller/chat/main';

export function ConversationalSearchInput() {
  const {
    actions: { sendMessage },
  } = useContext(ContextForConversationalSearch);

  const messageListController = useContext(ContextForConversationMessageList);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className='flex h-[7rem] flex-row items-center space-x-[2rem] p-[1.5rem]'>
      <GlassWindowFrame
        className='h-full w-[500px]'
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='h-full w-full'>
          <input
            placeholder='Type a message...'
            onKeyDown={handleKeyDown}
            onChange={(e) =>
              messageListController.actions.stateActions.updateInputMessageText(
                e.target.value,
              )
            }
            value={messageListController.state.more.inputMessageText}
            className={`h-full w-full animate-pulse-slow bg-transparent px-[2rem] font-light text-slate-300 outline-none`}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
      <button
        className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
        onClick={() => sendMessage()}
      >
        <AstralSendIcon />
      </button>
    </div>
  );
}
