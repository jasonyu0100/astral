import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useOpenAIController } from '@/api/controller/openai/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { useContext, useEffect } from 'react';
import { SpaceIdeaChatConversationHeader } from './conversation/header/main';
import { SpaceIdeaMessage } from './message/main';
import { SpaceIdeaChatStatus } from './status/main';

export function SpaceIdeaChat() {
  const openAi = useOpenAIController();
  const sceneListController = useContext(ContextForChapterSceneList);
  const conversationListController = useContext(
    ContextForSceneConversationList,
  );
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationObj = conversationListController.state.currentObj;
  const currentScene = sceneListController.state.currentObj;

  useEffect(() => {
    const text = messageListController.state.objs
      .map((message) => message.message)
      .join(' ');
    if (text.trim() === '') {
      return;
    }
    openAi
      .getMessageResponse(`Summarise within max 100 characters. ${text}`)
      .then((response) => {
        sceneListController.actions.editActions.edit(currentScene?.id || '', {
          summary: response || '',
        });
      });
  }, [messageListController.state.objs]);

  return (
    <div
      className='relative flex w-full flex-col items-center overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='flex w-[900px] flex-col space-y-[2rem] py-[2rem]'>
        <SpaceIdeaChatConversationHeader />
        <SpaceIdeaChatStatus />
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider
            value={message}
            key={message.id}
          >
            <SpaceIdeaMessage key={message.id} />
          </ContextForConversationMessageObj.Provider>
        ))}
        <div className='h-[4rem] flex-shrink-0'></div>
      </div>
      <div className='absolute right-[0px] flex h-full w-[6rem] items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <AstralChevronUpIcon
            className='h-[2.5rem] w-[2.5rem] cursor-pointer'
            onClick={() => {
              sceneListController.actions.stateActions.goPrev();
            }}
          />
          <AstralChevronDownIcon
            className='h-[2.5rem] w-[2.5rem] cursor-pointer'
            onClick={() => {
              sceneListController.actions.stateActions.goNext();
            }}
          />
        </div>
      </div>
    </div>
  );
}
