import { projectMap } from '@/(cx)/(studio)/project/map';
import { IndicatorSilverJewel } from '../(common)/indicator/jewel/silver/main';
import { IndicatorProps, SidebarIndicator } from '../(common)/indicator/main';
import { IndicatorText } from '../(common)/indicator/text/main';
import { SidebarIndicatorType } from '../(common)/indicator/main';

export function MovesIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Project;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={projectMap.moves.board.link}>
          <IndicatorSilverJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={projectMap.moves.board.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
