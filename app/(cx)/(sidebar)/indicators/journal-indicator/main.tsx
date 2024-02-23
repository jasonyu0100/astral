import { journalMap } from '@/(cx)/(studio)/journal/map';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from '../indicator/main';
import { IndicatorOrangeJewel } from '../indicator/jewel/orange/main';

export function JournalIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Journal;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={journalMap.journal.feed.link}>
          <IndicatorOrangeJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={journalMap.journal.feed.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
