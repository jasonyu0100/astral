'use client';

import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/(common)/(topbar)/main';
import { ventureMap } from '@/(core)/(dashboard)/venture/map';
import { createContext } from 'react';

interface ReleaseContextObj {
  releaseId: string;
}

export const ReleaseContext = createContext<ReleaseContextObj>(
  {} as ReleaseContextObj,
);

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <ReleaseContext.Provider value={{ releaseId: params.id }}>
      <DashboardTopbar />
      <DashboardController>
        <DashboardSidebarView
          minimised
          backUrl={ventureMap.venture.horizons.link}
        />
        {children}
      </DashboardController>
    </ReleaseContext.Provider>
  );
}
