import { tracksMap } from '@/(verses)/(voyager)/tracks/map';
import { IndicatorSilverJewel } from '../indicator/jewel/silver/main';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from '../indicator/main';

export function TracksIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Tracks;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={tracksMap.tracks.releases.link}>
          <IndicatorSilverJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={tracksMap.tracks.releases.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
