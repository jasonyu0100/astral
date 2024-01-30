import { labelMap } from '@/(cosmos)/(voyager)/board/map';
import { IndicatorSilverJewel } from '../indicator/jewel/silver/main';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from "../indicator/main";

export function RecordIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Board;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={labelMap.label.releases.link}>
          <IndicatorSilverJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={labelMap.label.releases.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
