'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { CommonTopbar } from '@/(core)/common/(topbar)/main';
import { CentralWindowContainer } from './common/central/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CommonTopbar />
      <DashboardContainer fullHeight>
        <CommonSidebar minimised />
        <DashboardBody>
          <CentralWindowContainer>{children}</CentralWindowContainer>
        </DashboardBody>
      </DashboardContainer>
    </>
  );
}
