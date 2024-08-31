import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useOpenAIController } from '@/api/controller/openai/main';
import { AstralAddIcon } from '@/icons/add/main';
import { cn } from '@/lib/utils';
import { useGlobalUser } from '@/logic/store/user/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext, useEffect } from 'react';
import { SpaceChatConversationMessages } from './conversation/list/main';
import { SpaceChatChatStatus } from './status/main';

export function SpaceChatChat() {
  const user = useGlobalUser((state) => state.user);
  const openAi = useOpenAIController();
  const sceneListController = useContext(ContextForChapterSceneList);
  const conversationListController = useContext(
    ContextForSceneConversationList,
  );
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationObj = conversationListController.state.currentObj;

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
        conversationListController.actions.editActions.edit(
          conversationObj?.id || '',
          {
            summary: response || '',
          },
        );
      });
  }, [messageListController.state.objs]);

  return (
    <div
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <div className='flex h-[8rem] w-[1200px] flex-shrink-0 flex-col items-center space-y-[2rem]'>
        <SpaceChatChatStatus />
      </div>
      <div className='flex w-full flex-col items-center overflow-auto'>
        <SpaceChatConversationMessages />
      </div>
      <div className='absolute right-[0px] flex h-full w-[6rem] items-center justify-center'>
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
          <GlassWindowFrame
            className='h-[2rem] w-[2rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents
              className={cn(
                'flex cursor-pointer flex-col items-center justify-center space-y-[1rem]',
              )}
              onClick={() => {
                conversationListController.actions.createActions.createConversation(
                  user.id,
                  sceneListController.state.objId,
                );
              }}
            >
              <AstralAddIcon className='h-[1/2] w-[1/2]' />
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
      </div>
    </div>
  );
}
