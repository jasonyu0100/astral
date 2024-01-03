"use client";

import { Background } from "@/(pages)/(common)/background/main";
import { Topbar } from "@/(pages)/(common)/topbar/main";
import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardSidebar } from "../../../(common)/sidebar/main";
import { createContext } from "react";

export interface ProcessIdContextObj {
  processId: string;
}

export const ProcessContext = createContext<ProcessIdContextObj>({
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
