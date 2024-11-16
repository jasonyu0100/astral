import { feedsMap } from '@/(core)/(dashboard)/explore/map';
import { ContextForCommonSidebar } from '@/(core)/common/sidebar/main';
import { useContext } from 'react';
import { CommonIndicatorOrangeJewel } from '../../indicator/jewel/orange/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarExploreIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Explore;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar.minimised ? (
        <CommonSidebarIndicator href={feedsMap.feed.forYou.link}>
          <CommonIndicatorOrangeJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={feedsMap.feed.forYou.link}>
          <CommonIndicatorOrangeJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
