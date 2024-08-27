import { StudioTabs, StudioTabStages } from '../../(tabs)/main';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <StudioTabs tab={StudioTabStages.Shared} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
