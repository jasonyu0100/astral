import { BoardTabStage, BoardTabs } from "../../tabs/main";

import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BoardTabs tab={BoardTabStage.Explore} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
