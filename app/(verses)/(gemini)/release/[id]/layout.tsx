'use client';

import { Topbar } from '@/(verses)/(topbar)/main';
import { DashboardController } from '@/(verses)/(common)/controller/main';
import { createContext } from 'react';
import { tracksMap } from '@/(verses)/(voyager)/tracks/map';
import { DashboardSidebar } from '@/(verses)/(sidebar)/main';

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
