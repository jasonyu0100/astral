import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { useContext } from 'react';
import { IndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function ArchiveIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Archive;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar?.minimised ? (
        <DashboardSidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorOrangeJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
