import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { useContext } from 'react';
import { SpaceProgressViewSessionForm } from './form/main';
import { SpaceProgressViewSessionPanel } from './panel/main';

export function SpaceProgressViewSession() {
  const sessionListController = useContext(ContextForChapterSessionList);
  const session = sessionListController.state.currentObj;
  const updateListController = useContext(ContextForSessionUpdateList);

  return (
    <ContextForSessionUpdateList.Provider value={updateListController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceProgressViewSessionPanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceProgressViewSessionForm />
          </div>
        </div>
      </div>
    </ContextForSessionUpdateList.Provider>
  );
}
