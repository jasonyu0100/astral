'use client';

import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/(common)/(topbar)/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { createContext } from 'react';

interface HorizonContextObj {
  releaseId: string;
}

export const ContextForHorizon = createContext<HorizonContextObj>(
  {} as HorizonContextObj,
);

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;
  params: { id: string };
}) {
  return (
    <ContextForHorizon.Provider value={{ releaseId: params.id }}>
      <DashboardTopbar />
      <DashboardController>
        <DashboardSidebarView
          minimised
          backUrl={explorerMap.venture.projects.link}
        />
        {children}
      </DashboardController>
    </ContextForHorizon.Provider>
  );
}
