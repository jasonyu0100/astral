import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { ventureMap } from '@/(core)/(dashboard)/horizon/map';
import { useContext } from 'react';
import { IndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function VentureIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Explorer;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <DashboardSidebarIndicator href={ventureMap.venture.projects.link}>
          <IndicatorOrangeJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={ventureMap.venture.projects.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
