import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { useContext } from 'react';
import { IndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
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
          <IndicatorOrangeJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={vaultMap.vault.explorer.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
