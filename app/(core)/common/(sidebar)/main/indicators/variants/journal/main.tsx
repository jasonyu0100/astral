import { journalMap } from '@/(core)/(dashboard)/journal/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import React, { useContext } from 'react';
import { CommonIndicatorGreenJewel } from '../../indicator/jewel/green/main';
import {
  CommonSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarJournalIndicator() {
  const dashboardSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Journal;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <CommonSidebarIndicator href={journalMap.journal.daily.link}>
          <CommonIndicatorGreenJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={journalMap.journal.daily.link}>
          <CommonIndicatorGreenJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
