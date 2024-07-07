import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { useContext } from 'react';
import { IndicatorSilverJewel } from '../../indicator/jewel/silver/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function ExplorerIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Explorer;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <DashboardSidebarIndicator href={explorerMap.venture.projects.link}>
          <IndicatorSilverJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={explorerMap.venture.projects.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
