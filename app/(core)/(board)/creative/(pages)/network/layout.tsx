import { CreativeTabStage, CreativeTabs } from '../../(tabs)/main';

import { DashboardContent } from '@/(components)/(core)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CreativeTabs tab={CreativeTabStage.Network} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
