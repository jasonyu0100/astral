'use client';
import { Topbar } from '@/(core)/(common)/(topbar)/main';
import { DashboardController } from '@/(components)/(dashboard)/controller/main';
import { DashboardSidebarView } from '@/(core)/(common)/(sidebar)/main';
import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import { DashboardBody } from '@/(components)/(dashboard)/controller/body/main';
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
      <Topbar />
      <DashboardController>
        <DashboardSidebarView minimised backUrl={learnMap.learn.link} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardController>
    </>
  );
}
