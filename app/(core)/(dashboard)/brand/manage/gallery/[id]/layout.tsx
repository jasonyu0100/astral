import { DriveTabs, DriveTabStage } from '@/(core)/(dashboard)/brand/tabs/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <DriveTabs tab={DriveTabStage.Manage} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
