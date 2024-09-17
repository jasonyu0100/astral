import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import React, { useContext } from 'react';
import { CommonIndicatorBlueJewel } from '../../indicator/jewel/blue/main';
import {
  CommonSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarSpaceIndicator() {
  const dashboardSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Studio;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <CommonSidebarIndicator href={studioMap.studio.personal.link}>
          <CommonIndicatorBlueJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={studioMap.studio.personal.link}>
          <CommonIndicatorBlueJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
