import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from '../indicator/main';
import { IndicatorPurpleJewel } from '../indicator/jewel/purple/main';
import { artistsMap } from '@/(cx)/(studio)/artists/map';

export function ArtistsIndicator({ indicator, minimised }: IndicatorProps) {
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
