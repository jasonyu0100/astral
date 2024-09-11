import { useContext } from 'react';
import { ContextForUserProfile, UserProfilePage } from '../../controller/main';
import { UserProfileCollaboratorsMain } from './collaborators/main';
import { UserProfileOverviewMain } from './overview/main';
import { UserProfileSupportersMain } from './supporters/main';

export function UserProfilePages() {
  const {
    state: { page },
  } = useContext(ContextForUserProfile);
  return (
    <div className='h-full flex-grow overflow-hidden'>
      {page === UserProfilePage.Supporters && <UserProfileSupportersMain />}
      {page === UserProfilePage.Collaborators && (
        <UserProfileCollaboratorsMain />
      )}
      {page === UserProfilePage.Overview && <UserProfileOverviewMain />}
    </div>
  );
}
