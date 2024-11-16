import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { ExploreTabs, ExploreTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ExploreTabs tab={ExploreTabStage.Following} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
