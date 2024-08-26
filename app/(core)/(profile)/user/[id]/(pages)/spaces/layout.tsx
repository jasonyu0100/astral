'use client';
import { DashboardContent } from '@/ui/(dashboard)/content/main';
import { DashboardBody } from '@/ui/(dashboard)/controller/body/main';
import { UserTabs, UserTabStage } from '../../(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardBody>
      <UserTabs tab={UserTabStage.Spaces} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
