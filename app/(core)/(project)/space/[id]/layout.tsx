'use client';
import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/(common)/(topbar)/main';
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
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <CreativeSpacesContext.Provider value={{ spaceId: params.id }}>
      <DashboardTopbar />
      <DashboardController>
        <DashboardSidebarView minimised />
        {children}
      </DashboardController>
    </CreativeSpacesContext.Provider>
  );
}
