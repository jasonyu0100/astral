import { StudioTabs, StudioTabStages } from '../../(tabs)/main';

import { DashboardContent } from '@/ui/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <StudioTabs tab={StudioTabStages.Backed} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
