import { networkMap } from '@/(core)/(dashboard)/network/map';
import { ContextForDashboardSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { IndicatorPurpleJewel } from '../../indicator/jewel/purple/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function NetworkIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Network;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <DashboardSidebarIndicator href={networkMap.network.creative.link}>
          <IndicatorPurpleJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={networkMap.network.creative.link}>
          <IndicatorPurpleJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
