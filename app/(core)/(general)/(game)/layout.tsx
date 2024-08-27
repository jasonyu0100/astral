'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { DashboardSidebarView } from '@/(core)/common/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/common/(topbar)/main';

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
        <DashboardSidebarView minimised />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </>
  );
}
