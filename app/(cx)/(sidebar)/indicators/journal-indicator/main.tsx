import { journalMap } from '@/(cx)/(studio)/journal/map';
import { IndicatorProps, SidebarIndicator } from '../(common)/indicator/main';
import { IndicatorText } from '../(common)/indicator/text/main';
import { SidebarIndicatorType } from '../(common)/indicator/main';
import { IndicatorOrangeJewel } from '../(common)/indicator/jewel/orange/main';

export function JournalIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Journal;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={journalMap.journal.updates.link}>
          <IndicatorOrangeJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={journalMap.journal.updates.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
