'use client';
import { Topbar } from '@/(core)/(base)/(topbar)/main';
import { DashboardController } from '@/(components)/(core)/controller/main';
import { DashboardSidebarView } from '@/(core)/(base)/(sidebar)/main';
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
      <Topbar />
      <DashboardController>
        <DashboardSidebarView minimised />
        {children}
      </DashboardController>
    </CreativeSpacesContext.Provider>
  );
}
