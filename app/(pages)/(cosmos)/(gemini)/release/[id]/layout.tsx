import { Topbar } from "@/(pages)/(common)/topbar/main";
import { DashboardController } from "@/(pages)/(cosmos)/(common)/controller/main";
import { DashboardSidebar } from "../../../(common)/sidebar/main";
import { createContext } from "react";

export interface ReleaseIdContextObj {
  releaseId: string;
}

export const ReleaseContext = createContext<ReleaseIdContextObj>({
  releaseId: "",
});

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
        <DashboardSidebar minimised />
        {children}
      </DashboardController>
    </ReleaseContext.Provider>
  );
}
