import { journalMap } from '@/(cosmos)/(voyager)/journal/map';
import { IndicatorGreenJewel } from '../indicator/jewel/green/main';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from "../indicator/main";

export function FeedIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Journal;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={journalMap.journal.journal.link}>
          <IndicatorGreenJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={journalMap.journal.journal.link}>
          <IndicatorGreenJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
