import { ContextForUserPublicList } from '@/architecture/controller/user/list-from-allowed-public';
import { useContext } from 'react';
import { NetworkCreativeEmpty } from './empty/main';
import { NetworkCreativeTableHeader } from './header/main';
import { NetworkCreativeTableResults } from './results/main';

export function NetworkCreativeTable() {
  const userListController = useContext(ContextForUserPublicList);

  return (
    <div className='h-full w-full overflow-auto'>
      <div className='h-full w-full p-[2rem]'>
        {userListController.state.objs.length > 0 ? (
          <>
            <NetworkCreativeTableHeader />
            <NetworkCreativeTableResults />
          </>
        ) : (
          <>
            <NetworkCreativeEmpty />
          </>
        )}
      </div>
    </div>
  );
}
