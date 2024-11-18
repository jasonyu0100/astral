import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { InspireTabs, InspireTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <InspireTabs tab={InspireTabStage.Following} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
