import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import React, { useContext } from 'react';
import { CommonIndicatorGoldJewel } from '../../indicator/jewel/gold/main';
import {
  CommonSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarVaultIndicator() {
  const dashboardSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Vault;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar?.minimised ? (
        <CommonSidebarIndicator href={vaultMap.vault.finder.link}>
          <CommonIndicatorGoldJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={vaultMap.vault.finder.link}>
          <CommonIndicatorGoldJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
