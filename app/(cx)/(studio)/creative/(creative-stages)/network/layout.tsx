import { ArtistsTabStage, ArtistsTabs } from '../../(creative-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistsTabs tab={ArtistsTabStage.Network} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
