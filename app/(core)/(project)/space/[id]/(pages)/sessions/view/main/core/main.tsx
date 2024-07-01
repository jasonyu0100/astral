import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { ContextForSpaceSessionsController } from '../../../(controller)/space-session/main';
import { SpaceSessionsSessionMain } from './session/main';
import { SpaceSessionsUpdateMain } from './update/main';

export function SpaceSessionsCoreMain() {
  const spaceSessionController = useContext(ContextForSpaceSessionsController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);
  const sessionListController = useContext(ContextForChapterSessionList);
  const latestSession =
    sessionListController.state.currentObj || ({} as ChapterSessionObj);

  return (
    <>
      {updateListController.state.objs.length > 0 ? (
        <>
          {spaceSessionController.sessionView ? (
            <SpaceSessionsSessionMain />
          ) : (
            <SpaceSessionsUpdateMain />
          )}
        </>
      ) : (
        <div className='flex flex-row'>
          <p className='text-xl font-bold text-slate-300'>
            No updates available since{' '}
            {getFormattedDate(new Date(latestSession?.created))}
          </p>
        </div>
      )}
    </>
  );
}
