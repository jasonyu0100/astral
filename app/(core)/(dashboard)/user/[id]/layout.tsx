'use client';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { createMap } from '@/(core)/(dashboard)/create/map';
import { CommonSidebar } from '@/(core)/common/sidebar/main';
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
      <DashboardContainer>
        <CommonSidebar backUrl={createMap.home.spaces.link} minimised />
        {children}
      </DashboardContainer>
    </ContextForProfileId.Provider>
  );
}
