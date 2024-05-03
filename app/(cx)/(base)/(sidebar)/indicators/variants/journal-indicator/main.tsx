import { journalMap } from '@/(cx)/(center)/journal/map';
import { IndicatorProps, DashboardSidebarIndicator } from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';
import { DashboardSidebarIndicatorType } from '../../indicator/main';
import { IndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
import { DashboardSidebarContext } from '@/(cx)/(base)/(sidebar)/main';
import { useContext } from 'react';

export function JournalIndicator() {
  const { minimised, indicator } = useContext(DashboardSidebarContext);
  const indicatorLabel = DashboardSidebarIndicatorType.Journal;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <DashboardSidebarIndicator href={journalMap.journal.updates.link}>
          <IndicatorOrangeJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={journalMap.journal.updates.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
