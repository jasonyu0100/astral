import { ArtistsTabStage, ArtistsTabs } from '../../tabs/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistsTabs tab={ArtistsTabStage.Charts} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
