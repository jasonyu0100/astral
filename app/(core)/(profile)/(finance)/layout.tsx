'use client';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/common/(topbar)/main';
import { PortalBackground } from '@/(portal)/common/background/main';
import { DashboardBody } from '@/ui/(dashboard)/controller/body/main';
import { DashboardController } from '@/ui/(dashboard)/controller/main';
import { Suspense } from 'react';
import { CentralWindowContainer } from '../../(general)/common/central/main';

export default function Layout({
  children,
}: {
  children?: React.ReactNode;
  params: { id: string };
}) {
  return (
    <Suspense fallback={<PortalBackground />}>
      <DashboardTopbar />
      <DashboardController>
        <DashboardSidebarView minimised />
        <DashboardBody>
          <CentralWindowContainer>{children}</CentralWindowContainer>
        </DashboardBody>
      </DashboardController>
    </Suspense>
  );
}
