import {
  RecordTabStage,
  RecordTabs,
} from '@/(cosmos)/(voyager)/board/tabs/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Trends} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
