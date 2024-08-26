'use client';

import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardController } from '@/ui/(dashboard)/controller/main';
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
