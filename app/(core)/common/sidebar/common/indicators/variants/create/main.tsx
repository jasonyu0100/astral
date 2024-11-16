import { createMap } from '@/(core)/(dashboard)/create/map';
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
  const indicatorLabel = CommonSidebarIndicatorType.Create;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
        <CommonSidebarIndicator href={createMap.home.spaces.link}>
          <CommonIndicatorBlueJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={createMap.home.spaces.link}>
          <CommonIndicatorBlueJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
