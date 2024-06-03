import { CraftTabStage, CraftTabs } from '@/(core)/(dashboard)/archive/(tabs)/main';

import { DashboardContent } from '@/(components)/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Search} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
