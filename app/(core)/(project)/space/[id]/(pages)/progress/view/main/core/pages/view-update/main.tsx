import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { useContext } from 'react';
import { SpaceProgressViewUpdateForm } from './form/main';
import { SpaceProgressViewUpdatePanel } from './panel/main';

export function SpaceProgressViewUpdate() {
  const sessionListController = useContext(ContextForChapterSessionList);
  const session = sessionListController.state.currentObj;
  const updateListController = useContext(ContextForSessionUpdateList);

  return (
    <ContextForSessionUpdateList.Provider value={updateListController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceProgressViewUpdatePanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceProgressViewUpdateForm />
          </div>
        </div>
      </div>
    </ContextForSessionUpdateList.Provider>
  );
}
