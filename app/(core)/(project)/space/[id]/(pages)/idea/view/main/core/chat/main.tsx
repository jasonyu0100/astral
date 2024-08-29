import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useOpenAIController } from '@/api/controller/openai/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { cn } from '@/lib/utils';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext, useEffect } from 'react';
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
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <div className='flex w-[900px] flex-shrink-0 flex-col space-y-[2rem] py-[2rem]'>
        <SpaceIdeaChatStatus />
      </div>
      <div className='flex w-full flex-col items-center overflow-auto'>
        <div className='w-[900px] flex-col space-y-[2rem] py-[2rem]'>
          {messageListController.state.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpaceIdeaMessage key={message.id} />
            </ContextForConversationMessageObj.Provider>
          ))}
        </div>
      </div>
      <div className='absolute left-[0px] flex h-full w-[6rem] items-center justify-center'>
        <div className='flex flex-col items-center justify-center space-y-[0.5rem]'>
          {conversationListController.state.objs.map((conversation, index) => (
            <GlassWindowFrame
              className='h-[2rem] w-[2rem]'
              roundedFx={roundedFx['rounded-full']}
            >
              <GlassWindowContents
                className={cn(
                  'flex cursor-pointer flex-col items-center justify-center space-y-[1rem]',
                  {
                    'bg-blue-500': conversation.id === conversationObj?.id,
                  },
                )}
                onClick={() => {
                  conversationListController.actions.stateActions.select(
                    conversation,
                  );
                }}
              >
                <p className='text-md font-bold text-slate-300'>{index + 1}</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          ))}
        </div>
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
