import { DashboardContent } from "@/(cosmos)/(common)/content/main";
import { BoardTabStage, BoardTabs } from "../../tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BoardTabs tab={BoardTabStage.Craft} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
