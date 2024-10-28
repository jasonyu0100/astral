import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForChapterConversationList } from '@/server/controller/conversation/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesChatConversations() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const conversationObj = conversationListController.state.currentObj;

  return (
    <div className='absolute left-[0px] flex h-full w-[6rem] items-center justify-center'>
      <div className='flex flex-col items-center justify-center space-y-[0.5rem]'>
        {conversationListController.state.objs.map((conversation, index) => (
          <GlassWindowFrame
            className='h-[2rem] w-[2rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents
              className={ctwn(
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
        {/* <GlassWindowFrame
          className='h-[2rem] w-[2rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className={ctwn(
              'flex cursor-pointer flex-col items-center justify-center space-y-[1rem]',
            )}
            onClick={() => {
              conversationListController.actions.createActions.createConversation(
                loggedInUser.id,
                chapterListController.state.objId,
              );
            }}
          >
            <AstralAddIcon className='h-[1/2] w-[1/2]' />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame> */}
      </div>
    </div>
  );
}
