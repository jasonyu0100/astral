import { DashboardContent } from '@/(cosmos)/(common)/content/main';

import { SpaceTabStages, SpacesTabs } from '../../tabs/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesTabs tab={SpaceTabStages.All} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
