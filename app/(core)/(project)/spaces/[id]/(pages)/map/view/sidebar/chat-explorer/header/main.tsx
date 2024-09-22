import { ContextForChapterConversationList } from '@/(server)/controller/space/chapter/conversation/list';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesMapChatExplorerHeader() {
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  return (
    <GlassWindowFrame className='h-[4rem] w-full flex-shrink-0 shadow-glow'>
      <div className='grid h-full w-full grid-cols-3 px-[1rem]'>
        <div className='flex w-full items-center justify-start'>
          <AstralChevronLeftIcon
            onClick={() => {
              if (conversationListController.state.index === 0) {
                alert('Cannot go back');
              } else {
                conversationListController.actions.stateActions.goPrev();
              }
            }}
            className={ctwn('fill-slate-300', {
              'fill-slate-500': conversationListController.state.index === 0,
            })}
          />
        </div>
        <div className='flex w-full items-center justify-center'>
          <p className='text-md font-bold text-slate-500'>
            {conversationListController.state.index + 1} /{' '}
            {conversationListController.state.objs.length}
          </p>
        </div>
        <div className='flex w-full items-center justify-end'>
          <AstralChevronRightIcon
            onClick={() => {
              if (
                conversationListController.state.index ===
                conversationListController.state.objs.length - 1
              ) {
                alert('Cannot go forward');
              } else {
                conversationListController.actions.stateActions.goNext();
              }
            }}
            className={ctwn('fill-slate-300', {
              'fill-slate-500':
                conversationListController.state.index ===
                conversationListController.state.objs.length - 1,
            })}
          />
        </div>
      </div>
    </GlassWindowFrame>
  );
}
