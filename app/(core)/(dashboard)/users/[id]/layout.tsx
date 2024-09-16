'use client';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { createContext } from 'react';

export interface ContextForProfileId {
  userId: string;
}

export const ContextForProfileId = createContext<ContextForProfileId>(
  {} as ContextForProfileId,
);

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <ContextForProfileId.Provider value={{ userId: params.id }}>
      <DashboardController>
        <CommonSidebar minimised backUrl={studioMap.studio.personal.link} />
        {children}
      </DashboardController>
    </ContextForProfileId.Provider>
  );
}
