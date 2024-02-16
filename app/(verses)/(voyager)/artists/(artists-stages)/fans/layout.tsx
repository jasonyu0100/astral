import { ArtistsTabStage, ArtistsTabs } from '../../(artists-tabs)/main';

import { DashboardContent } from '@/(verses)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistsTabs tab={ArtistsTabStage.Fans} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
