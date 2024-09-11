import {
  ContextForCollaborators,
  useControllerForCollaborators,
} from './controller/main';
import { UserProfileCollaboratorsFooter } from './footer/main';
import { UserProfileCollaboratorsHeader } from './header/main';
import { UserProfileCollaboratorsTable } from './table/main';

export function UserProfileCollaboratorsMain() {
  const collaboratorController = useControllerForCollaborators();

  return (
    <ContextForCollaborators.Provider value={collaboratorController}>
      <UserProfileCollaboratorsHeader />
      <UserProfileCollaboratorsTable />
      <UserProfileCollaboratorsFooter />
    </ContextForCollaborators.Provider>
  );
}
