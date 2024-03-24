import { IndicatorProps, SidebarIndicator } from '../(common)/indicator/main';
import { IndicatorText } from '../(common)/indicator/text/main';
import { SidebarIndicatorType } from '../(common)/indicator/main';
import { IndicatorPurpleJewel } from '../(common)/indicator/jewel/purple/main';
import { artistsMap } from '@/(cx)/(studio)/artists/map';

export function CreativeIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Artists;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={artistsMap.artists.network.link}>
          <IndicatorPurpleJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={artistsMap.artists.network.link}>
          <IndicatorPurpleJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
