'use client';
import { Topbar } from '@/(cx)/(topbar)/main';
import { DashboardController } from '@/(components)/(cx)/controller/main';
import { DashboardSidebar } from '@/(cx)/(sidebar)/main';
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
