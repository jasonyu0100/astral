import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DriveTabs, DriveTabStage } from '@/(core)/(dashboard)/drive/tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <DriveTabs tab={DriveTabStage.Finder} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
