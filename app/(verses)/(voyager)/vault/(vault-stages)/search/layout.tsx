import { CraftTabStage, CraftTabs } from '@/(verses)/(voyager)/vault/(vault-tabs)/main';

import { DashboardContent } from '@/(verses)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Search} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
