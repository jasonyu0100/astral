import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForDashboardSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { IndicatorGoldJewel } from '../../indicator/jewel/gold/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function VaultIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Vault;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar?.minimised ? (
        <DashboardSidebarIndicator href={vaultMap.vault.explorer.link}>
          <IndicatorGoldJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={vaultMap.vault.explorer.link}>
          <IndicatorGoldJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
