'use client';

import { Topbar } from '@/(common)/topbar/main';
import { DashboardController } from '@/(cosmos)/(common)/controller/main';
import { createContext } from 'react';
import { tracksMap } from '@/(cosmos)/(voyager)/tracks/map';
import { DashboardSidebar } from '@/(cosmos)/(sidebar)/main';

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
        <DashboardSidebar minimised backUrl={tracksMap.tracks.releases.link} />
        {children}
      </DashboardController>
    </ReleaseContext.Provider>
  );
}
