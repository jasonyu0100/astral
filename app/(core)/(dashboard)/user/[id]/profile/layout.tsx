'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { UserTabs, UserTabStage } from '../tabs/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <UserTabs tab={UserTabStage.Profile} />
      <DashboardContent padding>{children}</DashboardContent>
    </DashboardBody>
  );
}
