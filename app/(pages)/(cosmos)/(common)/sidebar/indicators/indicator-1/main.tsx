import { IndicatorBlueJewel } from "../indicator/jewel/blue/main";
import { IndicatorProps, SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";
import { spacesMap } from "@/(pages)/(cosmos)/(voyager)/spaces/map";

export function IndicatorOne({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = "Spaces";
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={spacesMap.spaces.now.link}>
          <IndicatorBlueJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={spacesMap.spaces.now.link}>
          <IndicatorBlueJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
