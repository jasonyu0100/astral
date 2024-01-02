import { worksMap } from "@/(pages)/(dashboard)/(voyager)/works/map";
import { IndicatorBlueJewel } from "../indicator/jewel/blue/main";
import { SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";

export function IndicatorOne({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Works";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href={worksMap.works.now.link}>
      <IndicatorBlueJewel active={active} />
      <IndicatorText active={active}>
        {indicatorLabel}
      </IndicatorText>
    </SidebarIndicator>
  );
}
