import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../../controller/main';
import { ProfileConnectionsMain } from './connnections/main';
import { ProfileOverviewMain } from './spaces/main';

export function ProfilePages() {
  const {
    state: { page },
  } = useContext(ContextForProfile);
  return (
    <div className='h-full flex-grow overflow-hidden'>
      {page === ProfilePage.Connections && <ProfileConnectionsMain />}
      {page === ProfilePage.Overview && <ProfileOverviewMain />}
    </div>
  );
}
