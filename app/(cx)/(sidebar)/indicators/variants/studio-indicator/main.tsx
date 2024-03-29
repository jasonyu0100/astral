import { DashboardSidebarIndicatorType } from '../../indicator/main';
import { IndicatorBlueJewel } from '../../indicator/jewel/blue/main';
import {
  DashboardSidebarIndicator,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';
import { studioMap } from '@/(cx)/(studio)/studio/map';
import { useContext } from 'react';
import { DashboardSidebarContext } from '@/(cx)/(sidebar)/main';

export function SpaceIndicator() {
  const { minimised, indicator } = useContext(DashboardSidebarContext);
  const indicatorLabel = DashboardSidebarIndicatorType.Studio;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <DashboardSidebarIndicator href={studioMap.studio.spaces.link}>
          <IndicatorBlueJewel active={active} />
        </DashboardSidebarIndicator>
      ) : (
        <DashboardSidebarIndicator href={studioMap.studio.spaces.link}>
          <IndicatorBlueJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </DashboardSidebarIndicator>
      )}
    </>
  );
}
