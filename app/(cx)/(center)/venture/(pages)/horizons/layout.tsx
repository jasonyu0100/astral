import {
  ProjectTabStage,
  ProjectTabs,
} from '@/(cx)/(center)/venture/(venture-tabs)/main';

import { DashboardContent } from '@/(lib)/(core)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProjectTabs tab={ProjectTabStage.Horizons} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
