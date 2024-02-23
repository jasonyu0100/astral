'use client';

import { Topbar } from '@/(cx)/(topbar)/main';
import { DashboardController } from '@/(components)/cx/controller/main';
import { createContext } from 'react';
import { movesMap } from '@/(cx)/(studio)/moves/map';
import { DashboardSidebar } from '@/(cx)/(sidebar)/main';

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
  children: React.ReactNode;

  params: { id: string };
}) {
  return (
    <ReleaseContext.Provider value={{ releaseId: params.id }}>
      <Topbar />
      <DashboardController>
        <DashboardSidebar minimised backUrl={movesMap.moves.releases.link} />
        {children}
      </DashboardController>
    </ReleaseContext.Provider>
  );
}
