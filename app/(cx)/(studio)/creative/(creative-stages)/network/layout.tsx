import { ArtistTabStage, ArtistTabs } from '../../(creative-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistTabs tab={ArtistTabStage.Network} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
