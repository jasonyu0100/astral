import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { useContext } from 'react';
import { SpaceSeaEditDone } from '../(common)/icon/done/main';
import { SpaceSeaEditNext } from '../(common)/icon/next/main';
import { SpaceSeaEditPrev } from '../(common)/icon/prev/main';
import { EditContext } from '../main';
import { SpaceSeaItemForm } from './form/main';

export function SpaceSeaEditItemForm() {
  const { updateComplete } = useContext(EditContext);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateItemListController = useContext(ContextForChapterItemList);

  return (
    <div className='flex h-full w-full flex-row items-center justify-between space-x-[4rem]'>
      {updateItemListController.state.index > 0 && (
        <SpaceSeaEditPrev
          onClick={() => {
            if (updateItemListController.state.index === 0) {
              chapterListController.actions.stateActions.goPrev();
            } else {
              updateItemListController.actions.stateActions.goPrev();
            }
          }}
        />
      )}
      <VerticalDivider />
      <SpaceSeaItemForm />
      <VerticalDivider />
      {updateItemListController.state.index !==
      updateItemListController.state.objs.length - 1 ? (
        <SpaceSeaEditNext
          onClick={() => {
            updateItemListController.actions.stateActions.goNext();
          }}
        />
      ) : (
        <SpaceSeaEditDone
          onClick={() => {
            updateComplete(true);
          }}
        />
      )}
    </div>
  );
}
