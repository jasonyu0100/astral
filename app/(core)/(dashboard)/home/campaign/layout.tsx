import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { CreateTabStages, CreateTabs } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CreateTabs tab={CreateTabStages.Campaign} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
