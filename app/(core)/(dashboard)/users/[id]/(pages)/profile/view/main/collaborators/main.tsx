import { createContext, useState } from 'react';
import { UserProfileCollaboratorsFooter } from './footer/main';
import { UserProfileCollaboratorsHeader } from './header/main';
import { UserProfileCollaboratorsTable } from './table/main';

export enum ConnectionsView {
  Collaborators = 'Collaborators',
  Links = 'Links',
}

interface Controller {
  view: ConnectionsView;
  setView: (view: ConnectionsView) => void;
}

export const ContextForCollaborators = createContext({} as Controller);

export function UserProfileCollaboratorsMain() {
  const [view, setView] = useState(ConnectionsView.Collaborators);

  const context = {
    view,
    setView,
  };

  return (
    <ContextForCollaborators.Provider value={context}>
      <div className='flex h-full w-full flex-col'>
        <UserProfileCollaboratorsHeader />
        <UserProfileCollaboratorsTable />
        <UserProfileCollaboratorsFooter />
      </div>
    </ContextForCollaborators.Provider>
  );
}
