import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { ContextForSpaceSessionController } from '../../../(controller)/space-session/main';
import { SpaceSessionSessionMain } from './session/main';
import { SpaceSessionUpdateMain } from './update/main';

export function SpaceSessionCoreMain() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);
  const updateListController = useContext(ContextForChapterSessionUpdateList);
  const sessionListController = useContext(ContextForChapterSessionList);
  const latestSession =
    sessionListController.state.currentObj || ({} as ChapterSessionObj);

  return (
    <>
      {updateListController.state.objs.length > 0 ? (
        <>
          {spaceSessionController.sessionView ? (
            <SpaceSessionSessionMain />
          ) : (
            <SpaceSessionUpdateMain />
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
