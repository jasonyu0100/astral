import { updatesMap } from '@/(core)/(dashboard)/updates/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { CommonIndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarUpdatesIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Updates;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
        <CommonSidebarIndicator href={updatesMap.updates.personal.link}>
          <CommonIndicatorOrangeJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={updatesMap.updates.personal.link}>
          <CommonIndicatorOrangeJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
