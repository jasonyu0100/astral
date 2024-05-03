import { SpaceTabStages, SpacesTabs } from '../../(studio-tabs)/main';

import { DashboardContent } from '@/(lib)/(core)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesTabs tab={SpaceTabStages.Spaces} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
