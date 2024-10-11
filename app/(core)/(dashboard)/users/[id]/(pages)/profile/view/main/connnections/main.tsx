import {
  ContextForConnections,
  useControllerForConnections,
} from './controller/main';
import { UserProfileCollaboratorsFooter } from './footer/main';
import { UserProfileCollaboratorsHeader } from './header/main';
import { UserProfileCollaboratorsTable } from './table/main';

export function UserProfileConnectionsMain() {
  const collaboratorController = useControllerForConnections();

  return (
    <ContextForConnections.Provider value={collaboratorController}>
      <UserProfileCollaboratorsHeader />
      <UserProfileCollaboratorsTable />
      <UserProfileCollaboratorsFooter />
    </ContextForConnections.Provider>
  );
}
