import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { ChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { SpaceSeaEditDone } from '../(common)/icon/done/main';
import { SpaceSeaEditNext } from '../(common)/icon/next/main';
import { SpaceSeaEditPrev } from '../(common)/icon/prev/main';
import { EditContext } from '../main';
import { SpaceSeaItemForm } from './form/main';

interface Controller {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  updateItem: () => Promise<ChapterUpdateItemObj>;
}

export const ContextForItemEdit = createContext({} as Controller);

export function SpaceSeaEditItemForm() {
  const { updateComplete } = useContext(EditContext);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateItemListController = useContext(ContextForChapterItemList);
  const currentItem =
    updateItemListController.state.currentObj || ({} as ChapterUpdateItemObj);
  const [title, setTitle] = useState(currentItem.title);
  const [description, setDescription] = useState(currentItem.description);

  async function updateItem() {
    const update = await updateItemListController.actions.editActions.edit(
      currentItem?.id,
      {
        title: title,
        description: description,
        added: true,
      },
    );
    return update;
  }

  const context = {
    title,
    setTitle,
    description,
    setDescription,
    updateItem,
  };

  return (
    <ContextForItemEdit.Provider value={context}>
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
    </ContextForItemEdit.Provider>
  );
}
