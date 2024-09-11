import {
  ContextForSupporters,
  useProfileSupportersController,
} from './controller/main';
import { UserProfileSupportersFooter } from './footer/main';
import { UserProfileSupportersHeader } from './header/main';
import { UserProfileSupportersTable } from './table/main';

export function UserProfileSupportersMain() {
  const supportersController = useProfileSupportersController();

  return (
    <ContextForSupporters.Provider value={supportersController}>
      <UserProfileSupportersHeader />
      <UserProfileSupportersTable />
      <UserProfileSupportersFooter />
    </ContextForSupporters.Provider>
  );
}
