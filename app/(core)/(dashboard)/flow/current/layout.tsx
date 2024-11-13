import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { FlowTabs, FlowTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <FlowTabs tab={FlowTabStage.Current} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
