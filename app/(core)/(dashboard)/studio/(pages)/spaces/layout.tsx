import { SpaceTabStages, SpacesTabs } from '../../(tabs)/main';

import { DashboardContent } from '@/(components)/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <SpacesTabs tab={SpaceTabStages.spaces} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
