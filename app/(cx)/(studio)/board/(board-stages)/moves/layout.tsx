import {
  RecordTabStage,
  RecordTabs,
} from '@/(cx)/(studio)/board/(board-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Moves} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
