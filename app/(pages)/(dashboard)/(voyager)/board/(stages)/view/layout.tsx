import { BoardTabStage, BoardTabs } from "../../tabs/main";

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BoardTabs tab={BoardTabStage.View} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
