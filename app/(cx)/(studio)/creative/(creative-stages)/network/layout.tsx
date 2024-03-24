import { CreativeTabStage, CreativeTabs } from '../../(creative-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CreativeTabs tab={CreativeTabStage.Network} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
