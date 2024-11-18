import { homeMap } from '@/(core)/(dashboard)/home/map';
import { ContextForCommonSidebar } from '@/(core)/common/sidebar/main';
import { useContext } from 'react';
import { CommonIndicatorBlueJewel } from '../../indicator/jewel/blue/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarCreateIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Home;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
        <CommonSidebarIndicator href={homeMap.home.projects.link}>
          <CommonIndicatorBlueJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={homeMap.home.projects.link}>
          <CommonIndicatorBlueJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
