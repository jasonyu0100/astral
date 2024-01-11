"use client"

import { Topbar } from "@/(pages)/(common)/topbar/main";
import { DashboardController } from "@/(pages)/(cosmos)/(common)/controller/main";
import { DashboardSidebar } from "../../../(common)/sidebar/main";
import { createContext } from "react";

export interface SpaceContextObj {
  spaceId: string;
}

export const SpaceContext = createContext<SpaceContextObj>({
  spaceId: "",
});

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: { id: string };
}) {
  return (
    <SpaceContext.Provider value={{ spaceId: params.id }}>
      <Topbar />
      <DashboardController>
        <DashboardSidebar minimised />
        {children}
      </DashboardController>
    </SpaceContext.Provider>
  );
}
