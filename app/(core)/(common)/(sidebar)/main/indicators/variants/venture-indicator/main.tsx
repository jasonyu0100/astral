import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { ventureMap } from '@/(core)/(dashboard)/venture/map';
import { useContext } from 'react';
import { IndicatorSilverJewel } from '../../indicator/jewel/silver/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function VentureIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Venture;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <DashboardSidebarIndicator href={ventureMap.venture.horizons.link}>
          <IndicatorSilverJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={ventureMap.venture.horizons.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
