import { ContextForDashboardSidebar } from '@/(core)/(common)/(sidebar)/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { useContext } from 'react';
import { IndicatorBlueJewel } from '../../indicator/jewel/blue/main';
import {
  DashboardSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { IndicatorText } from '../../indicator/text/main';

export function SpaceIndicator() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Studio;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
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
