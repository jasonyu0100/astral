'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { CommonTopbar } from '@/(core)/common/topbar/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CommonTopbar />
      <DashboardContainer>
        <DashboardBody>{children}</DashboardBody>
      </DashboardContainer>
    </>
  );
}
