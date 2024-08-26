'use client';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/common/(topbar)/main';
import { DashboardBody } from '@/ui/(dashboard)/controller/body/main';
import { DashboardController } from '@/ui/(dashboard)/controller/main';
import { devMap } from './map';

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <>
      <DashboardTopbar />
      <DashboardController>
        <DashboardSidebarView minimised backUrl={devMap.dev.link} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </>
  );
}
