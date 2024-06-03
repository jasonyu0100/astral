'use client';

import { Topbar } from '@/(core)/(common)/(topbar)/main';
import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { createContext } from 'react';
import { ventureMap } from '@/(core)/(board)/venture/map';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';

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
      <Topbar />
      <DashboardController>
        <DashboardSidebarView minimised backUrl={ventureMap.venture.horizons.link} />
        {children}
      </DashboardController>
    </ReleaseContext.Provider>
  );
}
