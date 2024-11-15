import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DriveTabs, DriveTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <DriveTabs tab={DriveTabStage.Uploads} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
