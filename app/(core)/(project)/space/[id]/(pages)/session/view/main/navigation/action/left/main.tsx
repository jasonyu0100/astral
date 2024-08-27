import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { WrapperTooltip } from '@/ui/(basic)/tooltip/main';
import { useContext } from 'react';

export function NavigationTimelineGoLeftAction() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <WrapperTooltip text={'Prev'}>
      <button
        className='flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full'
        onClick={() => chapterListController.actions.stateActions.goPrev()}
      >
        <AstralChevronLeftIcon />
      </button>
    </WrapperTooltip>
  );
}
