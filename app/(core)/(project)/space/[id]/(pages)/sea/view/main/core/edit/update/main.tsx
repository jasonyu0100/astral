import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { ContextForChapterUpdateList } from '@/(server)/(controller)/space/chapter/update/list';
import { ChapterUpdateObj } from '@/(server)/(model)/space/chapter/update/main';
import { createContext, useContext, useState } from 'react';
import { SpaceSeaEditPrev } from '../(common)/icon/prev/main';
import { EditContext } from '../main';
import { SpaceSeaUpdateForm } from './form/main';

interface Controller {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  saveUpdate: () => Promise<ChapterUpdateObj>;
}

export const ContextForUpdateEdit = createContext({} as Controller);

export function SpaceSeaEditUpdateForm() {
  const { updateComplete } = useContext(EditContext);
  const user = useGlobalUser((state) => state.user);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateListController = useContext(ContextForChapterUpdateList);
  const updateItemListController = useContext(ContextForChapterItemList);
  const currentUpdate =
    updateItemListController.state.currentObj || ({} as ChapterUpdateObj);
  const [title, setTitle] = useState(currentUpdate.title);
  const [description, setDescription] = useState(currentUpdate.description);

  async function saveUpdate() {
    const update = await updateListController.actions.createActions
      .createUpdate(
        user.id,
        chapterListController.state.objId,
        title,
        description,
      )
      .then((update) => {
        updateItemListController.state.objs.map(async (item) => {
          return updateItemListController.actions.editActions.edit(item.id, {
            updateId: update.id,
            added: true,
          });
        });
      });
    return update;
  }

  const context = {
    title,
    setTitle,
    description,
    setDescription,
    saveUpdate,
  };

  return (
    <ContextForUpdateEdit.Provider value={context}>
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
    </ContextForUpdateEdit.Provider>
  );
}
