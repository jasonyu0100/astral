import { useContext } from 'react';
import { ContextForUserProfile, UserProfilePage } from '../../controller/main';
import { UserProfileConnectionsMain } from './connnections/main';
import { UserProfileOverviewMain } from './overview/main';

export function UserProfilePages() {
  const {
    state: { page },
  } = useContext(ContextForUserProfile);
  return (
    <div className='h-full flex-grow overflow-hidden'>
      {page === UserProfilePage.Connections && <UserProfileConnectionsMain />}
      {page === UserProfilePage.Overview && <UserProfileOverviewMain />}
    </div>
  );
}
