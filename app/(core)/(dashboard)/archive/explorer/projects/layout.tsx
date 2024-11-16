import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { ProjectTabs, ProjectTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ProjectTabs tab={ProjectTabStage.Projects} />
      <DashboardContent padding>{children}</DashboardContent>
    </>
  );
}
