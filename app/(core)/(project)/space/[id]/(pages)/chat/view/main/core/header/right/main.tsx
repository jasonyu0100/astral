import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpaceChatModals } from '../../../../../modal/controller/main';

export function SpaceChatHeaderRight() {
  const modalController = useContext(ContextForSpaceChatModals);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationLength = messageListController.state.objs.length;

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      {conversationLength >= 8 ? (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            modalController.generateSceneController.open();
          }}
        >
          <p className='font-bold text-slate-300'>
            Generate Map ({conversationLength})
          </p>
          <AstralArrowForwardIcon />
        </button>
      ) : (
        <p className='animate-pulse font-bold text-slate-400'>
          {8 - conversationLength} more messages needed
        </p>
      )}
    </div>
  );
}
