import { ArtistsTabStage, ArtistsTabs } from '../../(artists-tabs)/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistsTabs tab={ArtistsTabStage.Charts} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
