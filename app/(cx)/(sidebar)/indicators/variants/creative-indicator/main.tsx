import { IndicatorProps, DashboardSidebarIndicator } from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';
import { DashboardSidebarIndicatorType } from '../../indicator/main';
import { IndicatorPurpleJewel } from '../../indicator/jewel/purple/main';
import { creativeMap } from '@/(cx)/(studio)/creative/map';
import { DashboardSidebarContext } from '@/(cx)/(sidebar)/main';
import { useContext } from 'react';

export function CreativeIndicator() {
  const { minimised, indicator } = useContext(DashboardSidebarContext);
  const indicatorLabel = DashboardSidebarIndicatorType.Creative;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <DashboardSidebarIndicator href={creativeMap.creative.network.link}>
          <IndicatorPurpleJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={creativeMap.creative.network.link}>
          <IndicatorPurpleJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
