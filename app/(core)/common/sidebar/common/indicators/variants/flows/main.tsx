import { flowMap } from '@/(core)/(dashboard)/flow/map';
import { ContextForCommonSidebar } from '@/(core)/common/sidebar/main';
import { useContext } from 'react';
import { CommonIndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarFlowsIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Flow;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
        <CommonSidebarIndicator href={flowMap.flow.current.link}>
          <CommonIndicatorOrangeJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={flowMap.flow.current.link}>
          <CommonIndicatorOrangeJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
