"use client";

import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardSidebar } from "../../../(common)/sidebar/main";
import { Background } from "@/(pages)/(common)/background/main";
import { Topbar } from "@/(pages)/(common)/topbar/main";
import { createContext } from "react";

export enum ProcessStage {
  Storm = "Storm",
  Draft = "Draft",
  Flow = "Flow",
  Sea = "Sea",
}

export interface ProcessContextObj {
  processId: string;
}

export const ProcessContext = createContext<ProcessContextObj>({
  processId: "",
});

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: { id: string };
}) {
  return (
    <ProcessContext.Provider value={{ processId: params.id }}>
      <Background>
        <Topbar />
        <DashboardController>
          <DashboardSidebar />
          {children}
        </DashboardController>
      </Background>
    </ProcessContext.Provider>
  );
}
