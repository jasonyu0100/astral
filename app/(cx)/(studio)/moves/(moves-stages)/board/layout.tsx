import {
  RecordTabStage,
  RecordTabs,
} from '@/(cx)/(studio)/moves/(moves-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Board} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
