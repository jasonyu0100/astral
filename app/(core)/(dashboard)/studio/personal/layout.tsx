import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { StudioTabs, StudioTabStages } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <StudioTabs tab={StudioTabStages.Personal} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
