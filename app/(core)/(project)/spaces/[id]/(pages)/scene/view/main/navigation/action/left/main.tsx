import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { WrapperTooltip } from '@/components/tooltip/main';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function NavigationTimelineGoLeftAction() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <WrapperTooltip text={'Prev'}>
      <button
        className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full'
        onClick={() => chapterListController.actions.stateActions.goPrev()}
      >
        <AstralChevronLeftIcon
          className={ctwn('h-[3rem] w-[3rem] fill-slate-300', {
            'fill-slate-500': chapterListController.state.index === 0,
          })}
        />
      </button>
    </WrapperTooltip>
  );
}
