import { SpaceTabStages, SpacesTabs } from '../../(tabs)/main';

import { DashboardContent } from '@/(components)/(core)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesTabs tab={SpaceTabStages.Spaces} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
