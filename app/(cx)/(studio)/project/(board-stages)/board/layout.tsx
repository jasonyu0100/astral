import {
  ProjectTabStage,
  ProjectTabs,
} from '@/(cx)/(studio)/project/(board-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProjectTabs tab={ProjectTabStage.Board} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
