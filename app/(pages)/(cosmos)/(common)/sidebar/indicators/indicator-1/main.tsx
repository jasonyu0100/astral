import { worksMap } from "@/(pages)/(cosmos)/(voyager)/works/map";
import { IndicatorBlueJewel } from "../indicator/jewel/blue/main";
import { IndicatorProps, SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";

export function IndicatorOne({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = "Works";
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={worksMap.works.now.link}>
          <IndicatorBlueJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={worksMap.works.now.link}>
          <IndicatorBlueJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
