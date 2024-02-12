'use client';

import { Topbar } from '@/(cosmos)/(topbar)/main';
import { DashboardController } from '@/(cosmos)/(common)/controller/main';
import { DashboardSidebar } from '@/(cosmos)/(sidebar)/main';
import { createContext } from 'react';

interface CreativeSpacesContextObj {
  spaceId: string;
}

export const CreativeSpacesContext = createContext<CreativeSpacesContextObj>(
  {} as CreativeSpacesContextObj,
);

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: { id: string };
}) {
  return (
    <CreativeSpacesContext.Provider value={{ spaceId: params.id }}>
      <Topbar />
      <DashboardController>
        <DashboardSidebar minimised />
        {children}
      </DashboardController>
    </CreativeSpacesContext.Provider>
  );
}
