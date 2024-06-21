import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
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
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  const context = {
    complete,
    updateComplete: (value: boolean) => setComplete(value),
  };

  return (
    <>
      <EditContext.Provider value={context}>
        {sessionUpdateListController.state.objs.length > 0 ? (
          <>
            {complete ? <SpaceSeaEditUpdateForm /> : <SpaceSeaEditItemForm />}
          </>
        ) : (
          <div className='flex flex-row'>
            <p className='text-xl font-bold text-slate-300'>
              No updates available since{' '}
              {getFormattedDate(new Date(current?.created))}
            </p>
          </div>
        )}
      </EditContext.Provider>
    </>
  );
}
