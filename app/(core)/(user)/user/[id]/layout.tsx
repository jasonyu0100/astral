'use client';
import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/(common)/(topbar)/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
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
      <DashboardController>
        <DashboardSidebarView
          minimised
          backUrl={studioMap.studio.spaces.link}
        />
        {children}
      </DashboardController>
    </ContextForProfile.Provider>
  );
}
