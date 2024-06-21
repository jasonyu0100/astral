import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { useContext } from 'react';
import { IndicatorSilverJewel } from '../../indicator/jewel/silver/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function ArchiveIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Vault;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar?.minimised ? (
        <DashboardSidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorSilverJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
