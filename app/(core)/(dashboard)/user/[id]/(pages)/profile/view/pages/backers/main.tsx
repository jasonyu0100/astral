import { createContext, useState } from 'react';
import { UserProfileBackersFooter } from './footer/main';
import { UserProfileBackersHeader } from './header/main';
import { UserProfileBackersTable } from './table/main';

export enum BackingView {
  Backers = 'Backers',
  Backed = 'Backed',
}

interface Controller {
  view: BackingView;
  setView: (view: BackingView) => void;
}

export const ContextForBacking = createContext({} as Controller);

export function UserProfileBackersMain() {
  const [view, setView] = useState(BackingView.Backers);

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
