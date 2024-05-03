'use client';
import { Topbar } from '@/(cx)/(base)/(topbar)/main';
import { DashboardController } from '@/(lib)/(core)/controller/main';
import { DashboardSidebarView } from '@/(cx)/(base)/(sidebar)/main';
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
        <DashboardSidebarView minimised />
        {children}
      </DashboardController>
    </CreativeSpacesContext.Provider>
  );
}
