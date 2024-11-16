import {
  ProjectTabStage,
  ProjectTabs,
} from '@/(core)/(dashboard)/explorer/tabs/main';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ProjectTabs tab={ProjectTabStage.Projects} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
