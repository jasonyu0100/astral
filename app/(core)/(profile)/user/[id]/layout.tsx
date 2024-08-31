'use client';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/common/(topbar)/main';
import { createContext } from 'react';

export interface ContextForProfileInterface {
  userId: string;
}

export const ContextForProfile = createContext<ContextForProfileInterface>(
  {} as ContextForProfileInterface,
);

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <ContextForProfile.Provider value={{ userId: params.id }}>
      <DashboardTopbar />
      <DashboardController fullHeight>
        <DashboardSidebarView
          minimised
          backUrl={studioMap.studio.personal.link}
        />
        {children}
      </DashboardController>
    </ContextForProfile.Provider>
  );
}
