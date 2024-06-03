import { CraftTabStage, CraftTabs } from '@/(core)/(board)/archive/(tabs)/main';

import { DashboardContent } from '@/(components)/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Search} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
