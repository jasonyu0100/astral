import { DashboardContent } from '@/(verses)/(common)/content/main';
import { ArtistsTabStage, ArtistsTabs } from '../../(artists-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistsTabs tab={ArtistsTabStage.Stars} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
