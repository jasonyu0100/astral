import { useContext } from 'react';
import { ContextForUserProfile, UserProfilePage } from '../../controller/main';
import { UserProfileConnectsMain } from './connections/main';
import { UserProfileGeneralMain } from './general/main';
import { UserProfileBackersMain } from './supporters/main';

export function UserProfilePages() {
  const {
    state: { page },
  } = useContext(ContextForUserProfile);
  return (
    <>
      {page === UserProfilePage.Supporters && <UserProfileBackersMain />}
      {page === UserProfilePage.Collaborators && <UserProfileConnectsMain />}
      {page === UserProfilePage.General && <UserProfileGeneralMain />}
    </>
  );
}
