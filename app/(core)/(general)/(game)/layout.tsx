'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/common/(topbar)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <DashboardTopbar />
      <DashboardController fullHeight>
        <CommonSidebar minimised />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </>
  );
}
