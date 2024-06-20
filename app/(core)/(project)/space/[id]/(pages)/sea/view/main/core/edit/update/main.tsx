import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { useContext } from 'react';
import { SpaceSeaEditPrev } from '../(common)/icon/prev/main';
import { EditContext } from '../main';
import { SpaceSeaUpdateForm } from './form/main';

export function SpaceSeaEditUpdateForm() {
  const { updateComplete } = useContext(EditContext);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateItemListController = useContext(ContextForChapterItemList);

  return (
    <div className='flex h-full w-full flex-row items-center justify-between space-x-[4rem]'>
      <SpaceSeaEditPrev
        onClick={() => {
          updateComplete(false);
          if (updateItemListController.state.index === 0) {
            chapterListController.actions.stateActions.goPrev();
          } else {
            updateItemListController.actions.stateActions.goPrev();
          }
        }}
      />
      <VerticalDivider />
      <SpaceSeaUpdateForm />
      <VerticalDivider />
    </div>
  );
}
