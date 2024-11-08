import {
  ContextForConnections,
  useControllerForConnections,
} from './controller/main';
import { ProfileCollaboratorsFooter } from './footer/main';
import { ProfileCollaboratorsHeader } from './header/main';
import { ProfileCollaboratorsTable } from './table/main';

export function ProfileConnectionsMain() {
  const collaboratorController = useControllerForConnections();

  return (
    <ContextForConnections.Provider value={collaboratorController}>
      <ProfileCollaboratorsHeader />
      <ProfileCollaboratorsTable />
      <ProfileCollaboratorsFooter />
    </ContextForConnections.Provider>
  );
}
