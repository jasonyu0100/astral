'use client';
import { Topbar } from '@/(core)/(base)/(topbar)/main';
import { DashboardController } from '@/(components)/(core)/controller/main';
import { DashboardSidebarView } from '@/(core)/(base)/(sidebar)/main';
import { DashboardContent } from '@/(components)/(core)/content/main';
import { DashboardBody } from '@/(components)/(core)/controller/body/main';

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <>
      <Topbar />
      <DashboardController>
        <DashboardSidebarView minimised />
        <DashboardBody>
          {children}
        </DashboardBody>
      </DashboardController>
    </>
  );
}
