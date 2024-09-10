import { createContext, useState } from 'react';
import { UserProfileConnnectionsFooter } from './footer/main';
import { UserProfileConnectionsHeader } from './header/main';
import { UserProfileConnectionsTable } from './table/main';

export enum ConnectionsView {
  Collaborators = 'Collaborators',
  Links = 'Links',
}

interface Controller {
  view: ConnectionsView;
  setView: (view: ConnectionsView) => void;
}

export const ContextForConnections = createContext({} as Controller);

export function UserProfileConnectsMain() {
  const [view, setView] = useState(ConnectionsView.Collaborators);

  const context = {
    view,
    setView,
  };

  return (
    <ContextForConnections.Provider value={context}>
      <div className='flex h-full w-full flex-col'>
        <UserProfileConnectionsHeader />
        <UserProfileConnectionsTable />
        <UserProfileConnnectionsFooter />
      </div>
    </ContextForConnections.Provider>
  );
}
