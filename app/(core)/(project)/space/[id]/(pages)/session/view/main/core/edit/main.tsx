import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { createContext, useContext, useState } from 'react';
import { SpaceSessionEditSessionForm } from '../session/main';
import { SpaceSessionUpdate } from '../update/main';

interface Context {
  complete: boolean;
  updateComplete: (value: boolean) => void;
}

export const EditContext = createContext({} as Context);

export function SpaceSessionCardEdit() {
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
            {complete ? (
              <SpaceSessionEditSessionForm />
            ) : (
              <SpaceSessionUpdate />
            )}
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
