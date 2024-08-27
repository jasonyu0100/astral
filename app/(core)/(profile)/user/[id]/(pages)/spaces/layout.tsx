'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { UserTabs, UserTabStage } from '../../(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <UserTabs tab={UserTabStage.Spaces} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
