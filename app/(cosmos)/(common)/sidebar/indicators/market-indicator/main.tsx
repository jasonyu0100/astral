import { marketMap } from '@/(cosmos)/(voyager)/market/map';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from "../indicator/main";
import { IndicatorPurpleJewel } from '../indicator/jewel/purple/main';

export function BoardIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Market;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={marketMap.market.journey.link}>
          <IndicatorPurpleJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={marketMap.market.journey.link}>
          <IndicatorPurpleJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
