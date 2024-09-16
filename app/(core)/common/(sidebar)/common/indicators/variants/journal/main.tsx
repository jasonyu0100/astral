import { journalMap } from '@/(core)/(dashboard)/journal/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { CommonIndicatorGreenJewel } from '../../indicator/jewel/green/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarJournalIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Journal;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
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
