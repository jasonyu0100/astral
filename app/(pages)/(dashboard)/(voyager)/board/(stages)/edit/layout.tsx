import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { BoardTabStage, BoardTabs } from "../../tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BoardTabs tab={BoardTabStage.Edit} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
