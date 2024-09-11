import { createContext, useState } from 'react';
import { UserProfileSupportersFooter } from './footer/main';
import { UserProfileSupportersHeader } from './header/main';
import { UserProfileSupportersTable } from './table/main';

export enum ProfileSupporterPage {
  Supporters = 'Supporters', // Who the user is backing
  Proposals = 'Proposals', // Who is backing the user
}

interface Controller {
  view: ProfileSupporterPage;
  setView: (view: ProfileSupporterPage) => void;
}

export const ContextForSupporters = createContext({} as Controller);

export function UserProfileSupportersMain() {
  const [view, setView] = useState(ProfileSupporterPage.Supporters);

  const context = {
    view,
    setView,
  };

  return (
    <ContextForSupporters.Provider value={context}>
      <div className='flex h-full w-full flex-col'>
        <UserProfileSupportersHeader />
        <UserProfileSupportersTable />
        <UserProfileSupportersFooter />
      </div>
    </ContextForSupporters.Provider>
  );
}
