import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { WrapperTooltip } from '@/ui/tooltip/main';
import { useContext } from 'react';

export function NavigationTimelineGoRightAction() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <WrapperTooltip text={'Next'}>
      <button
        className='flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full'
        onClick={() => chapterListController.actions.stateActions.goNext()}
      >
        <AstralChevronRightIcon />
      </button>
    </WrapperTooltip>
  );
}
