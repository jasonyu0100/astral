import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useOpenAIController } from '@/api/controller/openai/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { cn } from '@/utils/cn';
import { useContext, useEffect } from 'react';
import { SpaceIdeaMessage } from './message/main';

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
      className='relative flex w-full flex-row justify-center overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='absolute left-[0px] flex h-full w-[6rem] items-center justify-center'></div>
      <div className='flex w-[900px] flex-col space-y-[2rem] py-[2rem]'>
        {conversationObj && (
          <div className='flex w-full flex-row items-center justify-between'>
            <div className='flex'>
              <AstralChevronLeftIcon
                onClick={() => {
                  conversationListController.actions.stateActions.goPrev();
                }}
              />
            </div>
            <div className='flex'>
              <div className='flex flex-row items-center justify-center space-x-[0.5rem]'>
                {conversationListController.state.objs.map(
                  (conversation, index) => (
                    <GlassWindowFrame
                      className='h-[2rem] w-[2rem]'
                      roundedFx={roundedFx['rounded-full']}
                    >
                      <GlassWindowContents
                        className={cn(
                          'flex cursor-pointer flex-col items-center justify-center space-y-[1rem]',
                          {
                            'bg-blue-500':
                              conversation.id === conversationObj.id,
                          },
                        )}
                        onClick={() => {
                          conversationListController.actions.stateActions.select(
                            conversation,
                          );
                        }}
                      >
                        <p className='text-md font-bold text-slate-300'>
                          {index + 1}
                        </p>
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-5']} />
                    </GlassWindowFrame>
                  ),
                )}
              </div>
            </div>
            <div className='flex'>
              <AstralChevronRightIcon
                onClick={() => {
                  conversationListController.actions.stateActions.goNext();
                }}
              />
            </div>
          </div>
        )}
        <HorizontalDivider />
        <GlassWindowFrame className='w-full flex-shrink-0 px-[1rem]'>
          <GlassWindowContents className='flex flex-col items-center space-y-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>
              Objective:{' '}
              {sceneListController.state.currentObj?.description ||
                'Open-ended'}
            </p>
            <p className='text-center text-xl font-light text-slate-300'>
              {sceneListController.state?.currentObj?.summary || 'No status'}
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <HorizontalDivider />
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
