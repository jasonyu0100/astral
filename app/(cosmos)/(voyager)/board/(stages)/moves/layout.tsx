import { DashboardContent } from '@/(cosmos)/(common)/content/main';
import {
  RecordTabStage,
  RecordTabs,
} from '@/(cosmos)/(voyager)/board/tabs/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecordTabs tab={RecordTabStage.Moves} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
