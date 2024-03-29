'use client';
import { DashboardSidebarMinimised } from './main/minimised/main';
import { createContext } from 'react';
import { DashboardSidebarDefault } from './main/default/main';

export interface DashboardSidebarContextObj {
  indicator?: string;
  minimised?: boolean;
  backUrl?: string;
}

export const DashboardSidebarContext = createContext(
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
    <DashboardSidebarContext.Provider
      value={{ indicator: indicator, minimised: minimised, backUrl: backUrl }}
    >
      {minimised ? <DashboardSidebarMinimised /> : <DashboardSidebarDefault />}
    </DashboardSidebarContext.Provider>
  );
}
