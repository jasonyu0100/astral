import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { CommonIndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
import {
  CommonSidebarIndicator,
  DashboardSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarExplorerIndicator() {
  const dashboardSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = DashboardSidebarIndicatorType.Explorer;
  const active = dashboardSidebar.indicator === indicatorLabel;

  return (
    <>
      {dashboardSidebar.minimised ? (
        <CommonSidebarIndicator href={explorerMap.venture.projects.link}>
          <CommonIndicatorOrangeJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={explorerMap.venture.projects.link}>
          <CommonIndicatorOrangeJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
