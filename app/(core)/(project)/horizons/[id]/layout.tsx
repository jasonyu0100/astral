'use client';

import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
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
      <DashboardController fullHeight>
        <DashboardSidebarView
          minimised
          backUrl={explorerMap.venture.projects.link}
        />
        {children}
      </DashboardController>
    </ContextForHorizon.Provider>
  );
}
