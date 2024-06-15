'use client';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { DashboardTopbarContainer } from './container/main';
import { TopbarLogo } from './left-group/logo/main';
import { TopbarLeftGroup } from './left-group/main';
import { TopbarRightGroup } from './right-group/main';

export function DashboardTopbar() {
  return (
    <>
      <DashboardTopbarContainer>
        <TopbarLogo href={studioMap.studio.spaces.link} />
        <TopbarLeftGroup />
        <TopbarRightGroup />
      </DashboardTopbarContainer>
    </>
  );
}
