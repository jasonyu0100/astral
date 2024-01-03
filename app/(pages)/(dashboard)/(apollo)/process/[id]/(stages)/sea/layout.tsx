"use client"

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { ProcessTabStage, ProcessTabs } from "@/(pages)/(dashboard)/(apollo)/process/[id]/tabs/main";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    console.log('adsads123')
  }, [])
  return (
    <DashboardBody>
      <ProcessTabs tab={ProcessTabStage.Sea} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
