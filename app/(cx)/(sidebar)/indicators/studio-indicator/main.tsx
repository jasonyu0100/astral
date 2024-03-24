import { SidebarIndicatorType } from '../(common)/indicator/main';
import { IndicatorBlueJewel } from '../(common)/indicator/jewel/blue/main';
import { IndicatorProps, SidebarIndicator } from '../(common)/indicator/main';
import { IndicatorText } from '../(common)/indicator/text/main';
import { studioMap } from '@/(cx)/(studio)/studio/map';

export function SpaceIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Studio;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={studioMap.studio.now.link}>
          <IndicatorBlueJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={studioMap.studio.now.link}>
          <IndicatorBlueJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
