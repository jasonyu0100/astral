import { driveMap } from '@/(core)/(dashboard)/drive/map';
import { ContextForCommonSidebar } from '@/(core)/common/sidebar/main';
import { useContext } from 'react';
import { CommonIndicatorGoldJewel } from '../../indicator/jewel/gold/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarDriveIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Drive;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar?.minimised ? (
        <CommonSidebarIndicator href={driveMap.drive.uploads.link}>
          <CommonIndicatorGoldJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={driveMap.drive.uploads.link}>
          <CommonIndicatorGoldJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
