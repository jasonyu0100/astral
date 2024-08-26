import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { useContext } from 'react';
import { SpaceSessionViewUpdateForm } from './form/main';
import { SpaceSessionViewUpdatePanel } from './panel/main';

export function SpaceSessionViewUpdate() {
  const sessionListController = useContext(ContextForChapterSessionList);
  const session = sessionListController.state.currentObj;
  const updateListController = useContext(ContextForSessionUpdateList);

  return (
    <ContextForSessionUpdateList.Provider value={updateListController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceSessionViewUpdatePanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceSessionViewUpdateForm />
          </div>
        </div>
      </div>
    </ContextForSessionUpdateList.Provider>
  );
}
