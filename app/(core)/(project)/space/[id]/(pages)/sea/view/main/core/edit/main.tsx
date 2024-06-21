import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { ContextForChapterUpdateList } from '@/(server)/(controller)/space/chapter/update/list';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { createContext, useContext, useState } from 'react';
import { SpaceSeaEditItemForm } from './item/main';
import { SpaceSeaEditUpdateForm } from './update/main';

interface Context {
  complete: boolean;
  updateComplete: (value: boolean) => void;
}

export const EditContext = createContext({} as Context);

export function SpaceSeaCardEdit() {
  const [complete, setComplete] = useState(false);
  const updateItemListController = useContext(ContextForChapterItemList);
  const updateListController = useContext(ContextForChapterUpdateList);

  const context = {
    complete,
    updateComplete: (value: boolean) => setComplete(value),
  };

  return (
    <>
      <EditContext.Provider value={context}>
        {updateItemListController.state.objs.length > 0 ? (
          <>
            {complete ? <SpaceSeaEditUpdateForm /> : <SpaceSeaEditItemForm />}
          </>
        ) : (
          <div className='flex flex-row'>
            <p className='text-xl font-bold text-slate-300'>
              No updates available since{' '}
              {getFormattedDate(
                new Date(updateListController.state.currentObj?.created),
              )}
            </p>
          </div>
        )}
      </EditContext.Provider>
    </>
  );
}
