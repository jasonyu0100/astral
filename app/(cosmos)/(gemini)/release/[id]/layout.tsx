'use client';

import { Topbar } from '@/(common)/topbar/main';
import { DashboardController } from '@/(cosmos)/(common)/controller/main';
import { DashboardSidebar } from '../../../(common)/sidebar/main';
import { createContext } from 'react';
import { labelMap } from '@/(cosmos)/(voyager)/board/map';

interface ReleaseContextObj {
  releaseId: string;
}

export const ReleaseContext = createContext<ReleaseContextObj>({
} as ReleaseContextObj);

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
        <DashboardSidebar minimised backUrl={labelMap.label.releases.link} />
        {children}
      </DashboardController>
    </ReleaseContext.Provider>
  );
}
