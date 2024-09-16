import { DashboardTopbarContainer } from '../common/container/main';
import { TopbarLogo } from '../left-group/logo/main';
import { TopbarLeftGroup } from '../left-group/main';
import { TopbarRightGroup } from '../right-group/main';

export function DashboardTopbarView() {
  return (
    <DashboardTopbarContainer>
      <TopbarLogo href={'/'} />
      <TopbarLeftGroup />
      <TopbarRightGroup />
    </DashboardTopbarContainer>
  );
}
