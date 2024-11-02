import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { WrapperTooltip } from '@/components/tooltip/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function NavigationTimelineGoRightAction() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <WrapperTooltip text={'Next'}>
      <button
        className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full'
        onClick={() => chapterListController.actions.stateActions.goNext()}
      >
        <AstralChevronRightIcon
          className={ctwn('h-[3rem] w-[3rem] fill-slate-300', {
            'fill-slate-500':
              chapterListController.state.index ===
              chapterListController.state.objs.length - 1,
          })}
        />
      </button>
    </WrapperTooltip>
  );
}
