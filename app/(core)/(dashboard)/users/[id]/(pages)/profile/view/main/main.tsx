import { useContext } from 'react';
import { ContextForUserProfile, UserProfilePage } from '../../controller/main';
import { UserProfileCollaboratorsMain } from './connnections/main';
import { UserProfileOverviewMain } from './overview/main';

export function UserProfilePages() {
  const {
    state: { page },
  } = useContext(ContextForUserProfile);
  return (
    <div className='h-full flex-grow overflow-hidden'>
      {page === UserProfilePage.Connections && <UserProfileCollaboratorsMain />}
      {page === UserProfilePage.Overview && <UserProfileOverviewMain />}
    </div>
  );
}
