import {
  RecordTabStage,
  RecordTabs,
} from '@/(cosmos)/(voyager)/tracks/(tracks-tabs)/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Releases} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
