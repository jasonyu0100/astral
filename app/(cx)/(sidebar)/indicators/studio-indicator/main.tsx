import { SidebarIndicatorType } from '../indicator/main';
import { IndicatorBlueJewel } from '../indicator/jewel/blue/main';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
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
