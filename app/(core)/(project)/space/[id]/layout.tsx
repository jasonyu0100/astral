'use client';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardController } from '@/ui/(dashboard)/controller/main';
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
      <DashboardController>
        <DashboardSidebarView minimised />
        {children}
      </DashboardController>
    </CreativeSpacesContext.Provider>
  );
}
