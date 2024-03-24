import {
  ProjectTabStage,
  ProjectTabs,
} from '@/(cx)/(studio)/venture/(venture-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProjectTabs tab={ProjectTabStage.Horizon} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
