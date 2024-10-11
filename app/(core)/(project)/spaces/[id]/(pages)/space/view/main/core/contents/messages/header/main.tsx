import { ContextForChapterConversationList } from '@/(server)/controller/conversation/list';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesSpaceChatConversationHeader() {
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const conversationObj = conversationListController.state.currentObj;

  return (
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
      <div className='flex'>
        <AstralChevronRightIcon
          onClick={() => {
            conversationListController.actions.stateActions.goNext();
          }}
        />
      </div>
    </div>
  );
}
