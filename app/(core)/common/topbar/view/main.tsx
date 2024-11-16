import { createMap } from '@/(core)/(dashboard)/create/map';
import { DashboardTopbarContainer } from '../common/container/main';
import { TopbarLogo } from '../left-group/logo/main';
import { TopbarLeftGroup } from '../left-group/main';
import { TopbarRightGroup } from '../right-group/main';

export function CommonTopbarView() {
  return (
    <DashboardTopbarContainer>
      <TopbarLogo href={createMap.home.spaces.link} />
      <TopbarLeftGroup />
      <TopbarRightGroup />
    </DashboardTopbarContainer>
  );
}
