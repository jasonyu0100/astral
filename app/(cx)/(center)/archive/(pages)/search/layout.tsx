import { CraftTabStage, CraftTabs } from '@/(cx)/(center)/archive/(archive-tabs)/main';

import { DashboardContent } from '@/(lib)/(core)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Search} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
