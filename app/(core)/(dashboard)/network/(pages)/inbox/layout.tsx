import { CreativeTabStage, CreativeTabs } from '../../(tabs)/main';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CreativeTabs tab={CreativeTabStage.Inbox} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
