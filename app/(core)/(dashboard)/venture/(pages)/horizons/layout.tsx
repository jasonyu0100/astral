import {
  ProjectTabStage,
  ProjectTabs,
} from '@/(core)/(dashboard)/venture/(tabs)/main';

import { DashboardContent } from '@/(components)/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ProjectTabs tab={ProjectTabStage.Horizons} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
