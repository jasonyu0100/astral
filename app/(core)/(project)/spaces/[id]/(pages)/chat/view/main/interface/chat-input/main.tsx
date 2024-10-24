import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralVoiceIcon } from '@/icons/voice/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesChat } from '../../../../controller/main';

export function SpacesChatInputText() {
  const messageListController = useContext(ContextForConversationMessageList);
  const spacesConversationController = useContext(ContextForSpacesChat);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      spacesConversationController.actions.sendMessageToConversation();
    }
  };

  return (
    <GlassWindowFrame
      className='h-[3.5rem] w-[600px]'
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents className='flex w-full flex-row items-center px-[2rem]'>
        <input
          className={`h-full flex-grow animate-pulse-slow bg-transparent font-light text-slate-300 outline-none`}
          placeholder='Type a messsadfsge...'
          onKeyDown={handleKeyDown}
          onChange={(e) =>
            messageListController.actions.stateActions.updateInputMessageText(
              e.target.value,
            )
          }
          value={messageListController.state.more.inputMessageText}
        />
        <AstralVoiceIcon
          onClick={() => {
            alert('Coming soon...');
            // populate input message with voice over transcription
          }}
        />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
