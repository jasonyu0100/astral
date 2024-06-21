'use client';
import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import { DashboardBody } from '@/(components)/(dashboard)/controller/body/main';
import { UserTabs, UserTabStage } from '../../(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <UserTabs tab={UserTabStage.spaces} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
