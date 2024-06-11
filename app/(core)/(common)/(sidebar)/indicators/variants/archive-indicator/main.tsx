import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { DashboardSidebarIndicator } from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';
import { DashboardSidebarIndicatorType } from '../../indicator/main';
import { IndicatorGreenJewel } from '../../indicator/jewel/green/main';
import { DashboardSidebarContext } from '@/(core)/(common)/(sidebar)/main';
import { useContext } from 'react';
import { IndicatorOrangeJewel } from '../../indicator/jewel/orange/main';

export function ArchiveIndicator() {
  const { minimised, indicator } = useContext(DashboardSidebarContext);
  const indicatorLabel = DashboardSidebarIndicatorType.Archive;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <DashboardSidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorOrangeJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={archiveMap.archive.explorer.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
