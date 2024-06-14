import { ventureMap } from '@/(core)/(dashboard)/venture/map';
import { IndicatorSilverJewel } from '../../indicator/jewel/silver/main';
import {
  IndicatorProps,
  DashboardSidebarIndicator,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';
import { DashboardSidebarIndicatorType } from '../../indicator/main';
import { DashboardSidebarContext } from '@/(core)/(common)/(sidebar)/main';
import { useContext } from 'react';

export function VentureIndicator() {
  const { minimised, indicator } = useContext(DashboardSidebarContext);
  const indicatorLabel = DashboardSidebarIndicatorType.Venture;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <DashboardSidebarIndicator href={ventureMap.venture.horizons.link}>
          <IndicatorSilverJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={ventureMap.venture.horizons.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
