import { DashboardContent } from '@/(components)/(cx)/content/main';

import { SpaceTabStages, SpacesTabs } from '../../(studio-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesTabs tab={SpaceTabStages.Then} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
