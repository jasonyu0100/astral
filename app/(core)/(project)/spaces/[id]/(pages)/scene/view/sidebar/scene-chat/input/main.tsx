import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesSceneChat } from '../../../../controller/chat/main';

export function SpacesSceneChatSceneInput() {
  const messageListController = useContext(ContextForConversationMessageList);

  const {
    actions: { sendMessage },
  } = useContext(ContextForSpacesSceneChat);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0'>
      <GlassWindowContents className='p-[1rem]'>
        <GlassWindowFrame
          className='h-full w-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents className='flex h-full w-full flex-row items-center'>
            <input
              className='h-full w-full bg-transparent px-[1rem] font-light text-slate-300 outline-none placeholder:font-light'
              placeholder='Type a message'
              onKeyDown={handleKeyDown}
              onChange={(e) =>
                messageListController.actions.stateActions.updateInputMessageText(
                  e.target.value,
                )
              }
              value={messageListController.state.more.inputMessageText}
            />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
