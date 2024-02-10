import { DashboardContent } from '@/(cosmos)/(common)/content/main';
import { ArtistsTabStage, ArtistsTabs } from '../../tabs/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArtistsTabs tab={ArtistsTabStage.Stars} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
