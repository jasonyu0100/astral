import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpacesChannelModals } from '../../../../../modal/controller/main';

export function SpacesChannelHeaderRight() {
  const modalController = useContext(ContextForSpacesChannelModals);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationLength = messageListController.state.objs.filter(
    (message) => message.userId,
  ).length;

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      {conversationLength === 0 && (
        <p className='animate-pulse font-bold text-slate-400'>
          No messages sent
        </p>
      )}
      {conversationLength > 0 && conversationLength < 1 && (
        <p className='animate-pulse font-bold text-slate-400'>
          {1 - conversationLength} more messages needed
        </p>
      )}
      {conversationLength >= 1 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            modalController.generateSceneController.open();
          }}
        >
          <p className='font-bold text-slate-300'>
            Generate Scene ({conversationLength})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )}
    </div>
  );
}
