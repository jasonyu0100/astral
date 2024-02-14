import { CraftTabStage, CraftTabs } from '@/(cosmos)/(voyager)/vault/(vault-tabs)/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Explorer} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
