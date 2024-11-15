import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { HomeTabs, HomeTabStages } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <HomeTabs tab={HomeTabStages.Shared} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
