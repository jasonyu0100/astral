"use client"

import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { DashboardSidebar, SidebarIndicatorType } from "../../(common)/sidebar/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Craft} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
