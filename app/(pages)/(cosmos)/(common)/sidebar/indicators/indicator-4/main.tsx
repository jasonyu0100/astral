import { linkMap } from "@/(pages)/(cosmos)/(voyager)/link/map";
import { IndicatorPurpleJewel } from "../indicator/jewel/purple/main";
import { IndicatorProps, SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";

export function IndicatorFour({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = "Link";
  const active = indicator === indicatorLabel;
  
  return (
    <>
      {minimised ? (
        <SidebarIndicator href={linkMap.link.journal.link}>
          <IndicatorPurpleJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={linkMap.link.journal.link}>
          <IndicatorPurpleJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
