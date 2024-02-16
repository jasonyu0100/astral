import {
  RecordTabStage,
  RecordTabs,
} from '@/(verses)/(voyager)/tracks/(tracks-tabs)/main';

import { DashboardContent } from '@/(verses)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Releases} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
