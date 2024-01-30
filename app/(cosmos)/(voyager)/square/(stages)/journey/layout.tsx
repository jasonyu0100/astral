import { BoardTabStage, BoardTabs } from '../../tabs/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BoardTabs tab={BoardTabStage.Journey} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
