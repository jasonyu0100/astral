import { createContext, useState } from 'react';
import { UserProfileBackersFooter } from './footer/main';
import { UserProfileBackersHeader } from './header/main';
import { UserProfileBackersTable } from './table/main';

export enum ProfileSupporterPage {
  Supporters = 'Supporters', // Who the user is backing
  Proposals = 'Proposals', // Who is backing the user
}

interface Controller {
  view: ProfileSupporterPage;
  setView: (view: ProfileSupporterPage) => void;
}

export const ContextForBacking = createContext({} as Controller);

export function UserProfileBackersMain() {
  const [view, setView] = useState(ProfileSupporterPage.Supporters);

  const context = {
    view,
    setView,
  };

  return (
    <ContextForBacking.Provider value={context}>
      <div className='flex h-full w-full flex-col'>
        <UserProfileBackersHeader />
        <UserProfileBackersTable />
        <UserProfileBackersFooter />
      </div>
    </ContextForBacking.Provider>
  );
}
