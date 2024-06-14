'use client';
import { createContext } from 'react';
import { DashboardSidebarDefault } from './main/default/main';
import { DashboardSidebarMinimised } from './main/minimised/main';

export interface DashboardSidebarContextObj {
  indicator?: string;
  minimised?: boolean;
  backUrl?: string;
}

export const ContextForDashboardSidebar = createContext(
  {} as DashboardSidebarContextObj,
);

export function DashboardSidebarView({
  indicator,
  minimised,
  backUrl,
}: {
  indicator?: string;
  minimised?: boolean;
  backUrl?: string;
}) {
  return (
    <ContextForDashboardSidebar.Provider
      value={{ indicator: indicator, minimised: minimised, backUrl: backUrl }}
    >
      {minimised ? <DashboardSidebarMinimised /> : <DashboardSidebarDefault />}
    </ContextForDashboardSidebar.Provider>
  );
}
