import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { UpdatesTabs, UpdatesTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <UpdatesTabs tab={UpdatesTabStage.Following} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
