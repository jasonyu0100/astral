import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { CommonIndicatorBlueJewel } from '../../indicator/jewel/blue/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarSpaceIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Studio;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
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
