import { networkMap } from '@/(core)/(dashboard)/network/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { CommonIndicatorPurpleJewel } from '../../indicator/jewel/purple/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarNetworkIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Network;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
        <CommonSidebarIndicator href={networkMap.network.creative.link}>
          <CommonIndicatorPurpleJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={networkMap.network.creative.link}>
          <CommonIndicatorPurpleJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
