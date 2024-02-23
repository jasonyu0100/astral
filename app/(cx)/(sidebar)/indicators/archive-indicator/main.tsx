import { archiveMap } from '@/(cx)/(studio)/archive/map';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from '../indicator/main';
import { IndicatorGreenJewel } from '../indicator/jewel/green/main';

export function ArchiveIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Archive;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorGreenJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorGreenJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
