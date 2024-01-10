import { boardMap } from "@/(pages)/(cosmos)/(voyager)/board/map";
import { IndicatorGreenJewel } from "../indicator/jewel/green/main";
import { IndicatorProps, SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";

export function IndicatorThree({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = "Board";
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={boardMap.board.view.link}>
          <IndicatorGreenJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={boardMap.board.view.link}>
          <IndicatorGreenJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
