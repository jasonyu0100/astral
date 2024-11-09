import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../../controller/main';
import { UserProfileConnectionsMain } from './connnections/main';
import { UserProfileMain } from './spaces/main';

export function UserProfilePages() {
  const {
    state: { page },
  } = useContext(ContextForProfile);
  return (
    <div className='h-full flex-grow overflow-hidden'>
      {page === ProfilePage.Connections && <UserProfileConnectionsMain />}
      {page === ProfilePage.Overview && <UserProfileMain />}
    </div>
  );
}
