import { DashboardContent } from '@/(components)/cx/content/main';
import { ArtistsTabStage, ArtistsTabs } from '../../(artists-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistsTabs tab={ArtistsTabStage.Stars} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
