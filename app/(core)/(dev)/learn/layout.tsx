'use client';
import { DashboardBody } from '@/(components)/(dashboard)/controller/body/main';
import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardTopbar } from '@/(core)/(common)/(topbar)/main';
import { learnMap } from './map';

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
        <DashboardSidebarView minimised backUrl={learnMap.learn.link} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </>
  );
}
