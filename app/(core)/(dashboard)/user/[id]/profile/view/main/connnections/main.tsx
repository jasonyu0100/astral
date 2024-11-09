import {
  ContextForUserProfileConnections,
  useControllerForUserProfileConnections,
} from './controller/main';
import { UserProfileCollaboratorsFooter } from './footer/main';
import { UserProfileCollaboratorsHeader } from './header/main';
import { UserProfileCollaboratorsTable } from './table/main';

export function UserProfileConnectionsMain() {
  const collaboratorController = useControllerForUserProfileConnections();

  return (
    <ContextForUserProfileConnections.Provider value={collaboratorController}>
      <UserProfileCollaboratorsHeader />
      <UserProfileCollaboratorsTable />
      <UserProfileCollaboratorsFooter />
    </ContextForUserProfileConnections.Provider>
  );
}
