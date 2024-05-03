'use client';

import { Topbar } from '@/(cx)/(base)/(topbar)/main';
import { DasharcController } from '@/(lib)/(core)/controller/main';
import { createContext } from 'react';
import { ventureMap } from '@/(cx)/(center)/venture/map';
import { DasharcSidebarView } from '@/(cx)/(base)/(sidebar)/main';

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
      <DasharcController>
        <DasharcSidebarView minimised backUrl={ventureMap.venture.horizons.link} />
        {children}
      </DasharcController>
    </ReleaseContext.Provider>
  );
}
