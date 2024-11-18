import { brandMap } from '@/(core)/(dashboard)/brand/map';
import { ContextForCommonSidebar } from '@/(core)/common/sidebar/main';
import { useContext } from 'react';
import { CommonIndicatorGreenJewel } from '../../indicator/jewel/green/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarDriveIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Brand;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar?.minimised ? (
        <CommonSidebarIndicator href={brandMap.drive.uploads.link}>
          <CommonIndicatorGreenJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={brandMap.drive.uploads.link}>
          <CommonIndicatorGreenJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
