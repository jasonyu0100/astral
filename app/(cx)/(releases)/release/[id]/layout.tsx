'use client';

import { Topbar } from '@/(cx)/(topbar)/main';
import { DashboardController } from '@/(components)/(cx)/controller/main';
import { createContext } from 'react';
import { boardMap } from '@/(cx)/(studio)/board/map';
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
        <DashboardSidebar minimised backUrl={boardMap.moves.board.link} />
        {children}
      </DashboardController>
    </ReleaseContext.Provider>
  );
}
