import { ContextForSessionUpdateList } from '@/(server)/controller/space/chapter/session/update/list-from-session';
import { useContext } from 'react';
import { SpaceSessionViewSessionForm } from './form/main';
import { SpaceSessionViewSessionPanel } from './panel/main';

export function SpaceSessionViewSession() {
  const updateListController = useContext(ContextForSessionUpdateList);

  return (
    <ContextForSessionUpdateList.Provider value={updateListController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceSessionViewSessionPanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceSessionViewSessionForm />
          </div>
        </div>
      </div>
    </ContextForSessionUpdateList.Provider>
  );
}
