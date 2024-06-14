import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { creativeMap } from '@/(core)/(dashboard)/creative/map';
import { useContext } from 'react';
import { IndicatorPurpleJewel } from '../../indicator/jewel/purple/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function CreativeIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Creative;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <DashboardSidebarIndicator href={creativeMap.creative.network.link}>
          <IndicatorPurpleJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={creativeMap.creative.network.link}>
          <IndicatorPurpleJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
