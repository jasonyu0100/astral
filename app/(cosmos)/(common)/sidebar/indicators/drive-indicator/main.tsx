import { driveMap } from '@/(cosmos)/(voyager)/drive/map';
import { IndicatorOrangeJewel } from '../indicator/jewel/orange/main';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from "../indicator/main";

export function DriveIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Drive;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={driveMap.drive.explore.link}>
          <IndicatorOrangeJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={driveMap.drive.explore.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
