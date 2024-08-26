import { journalMap } from '@/(core)/(dashboard)/journal/map';
import { ContextForDashboardSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { IndicatorGreenJewel } from '../../indicator/jewel/green/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function JournalIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Journal;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <DashboardSidebarIndicator href={journalMap.journal.record.link}>
          <IndicatorGreenJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={journalMap.journal.record.link}>
          <IndicatorGreenJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
