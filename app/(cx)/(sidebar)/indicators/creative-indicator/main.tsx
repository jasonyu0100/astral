import { IndicatorProps, SidebarIndicator } from '../(common)/indicator/main';
import { IndicatorText } from '../(common)/indicator/text/main';
import { SidebarIndicatorType } from '../(common)/indicator/main';
import { IndicatorPurpleJewel } from '../(common)/indicator/jewel/purple/main';
import { creativeMap } from '@/(cx)/(studio)/creative/map';

export function CreativeIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Creative;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={creativeMap.creative.network.link}>
          <IndicatorPurpleJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={creativeMap.creative.network.link}>
          <IndicatorPurpleJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
