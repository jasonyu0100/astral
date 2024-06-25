import { StudioTabs, StudioTabStages } from '../../(tabs)/main';

import { DashboardContent } from '@/(components)/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <StudioTabs tab={StudioTabStages.Collabs} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
